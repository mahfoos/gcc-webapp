const admin = require('firebase-admin');
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

// Initialize Firebase Admin SDK
admin.initializeApp();

const cors = require('cors')({origin: true});

// Define a Cloud Function
exports.createOrder = functions.https.onRequest(async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type, referer');

    if (req.method === 'OPTIONS') {
        // Set the CORS headers for preflight requests
        res.set('Access-Control-Allow-Origin', '*');
        res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.set('Access-Control-Allow-Headers', 'Content-Type, referer');
        res.set('Access-Control-Max-Age', '3600');
    
        // Send a 200 status code for preflight requests
        res.status(200).send();
    }
  
    // Extract data from the POST request
    const data = req.body;

    try {
        const firestore = admin.firestore();
        const docRef = await firestore.collection('req-pick-up').add(data);

        const UserData = { 
            qid: data.qid, 
            shipperName: data.shipperName, 
            shipperMail: data.shipperMail, 
            shipperMobileNo: data.shipperMobileNo, 
            shipperAddress: data.shipperAddress
        };
        // console.log(UserData);
        const capitalizedShipperName = UserData.shipperName.toUpperCase();
        const simplizedShipperEmail = UserData.shipperMail.toLowerCase();

        // Send email using Nodemailer
        const transporter = nodemailer.createTransport({
            host: 'smtp.zoho.com',
            port: 465,
            secure: true,
            auth: {
            user: '<repalce email here>',
            pass: '<>replace password here'
            }
        });
    
        const message = {
            from: 'info@newgccargo.com',
            to: simplizedShipperEmail,
            subject: 'New GC Cargo Trading and Services',
            html:`
            <!DOCTYPE html>
            <html>
            <head>
              <style>
                .container {
                  border: 2px solid rgb(26, 97, 189);
                  padding: 20px;
                  font-family: Arial, sans-serif;
                }
                .blue-text {
                  color: rgb(26, 97, 189);
                  text-transform: uppercase;
                  font-weight: bold;
                }
                .thank {
                  color: rgb(26, 97, 189);
                  font-weight: bold;
                }
                .button {
                  display: inline-block;
                  background-color: rgb(26, 97, 189);
                  color: white !important; /* Add !important to ensure the text color remains white */
                  text-decoration: none;
                  padding: 10px 20px;
                  border-radius: 10px;
                  font-weight: bold;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <h1 class="blue-text">New GC Cargo: Track Your Shipment</h1>
                <p>Your Current Cargo Status: <span class="blue-text">REQUESTED</span> </p>
                <p>Hi, Mr. <span class="blue-text">${capitalizedShipperName}</span></p>
                <p>Your Cargo Bill No: <span class="blue-text">${data.orderId}</span></p>
                <p>You Can Track Your Shipments By Using Tracking No: <span class="blue-text">${data.orderId}</span></p>
                <p><a href="https://newgccargo.com/track-order/?trackingNumber=${data.orderId}" class="button">Track Your Order</a></p>
                <p class="thank">Thank you</p>
              </div>
            </body>
            </html>`
            //html: `<!DOCTYPE html><html><head><style>.container {border: 2px solid rgb(26, 97, 189);padding: 20px;font-family: Arial, sans-serif;}.blue-text {color: rgb(26, 97, 189);text-transform: uppercase;font-weight: bold;}.thank {color: rgb(26, 97, 189);font-weight: bold;}.button {display: inline-block;background-color: rgb(26, 97, 189);color: white !important; // Add !important to ensure the text color remains whitetext-decoration: none;padding: 10px 20px;border-radius: 10px;font-weight: bold;}</style></head><body><div class="container"><h1 class="blue-text">New GC Cargo: Track Your Shipment</h1><p>Your Current Cargo Status: <span class="blue-text">REQUESTED</span> </p><p>Hi, Mr. <span class="blue-text">${capitalizedShipperName}</span></p><p>Your Cargo Bill No</p><p>You Can Track Your Shipments By Using Tracking No: <span class="blue-text">${data.orderId}</span></p><p><a href="https://newgccargo.com/track-order/?trackingNumber=${data.orderId}" class="button">Track Your Order</a></p><p class="thank">Thank you</p></div></body></html>`
        };

        const info = await transporter.sendMail(message);
        console.log(`Email sent: ${info.messageId}`);

        // Write QID, Shipper name, and Shipper email to ClientData table if the QID doesn't already exist
        const clientDataRef = firestore.collection('client-data').doc(data.qid);
        const clientDataDoc = await clientDataRef.get();

        if (!clientDataDoc.exists) {
            await clientDataRef.set(UserData);
        }


        // Respond with a success message
        res.status(200).send('ok');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error adding data');
    }
});