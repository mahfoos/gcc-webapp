const admin = require('firebase-admin');
const functions = require('firebase-functions');

// Initialize Firebase Admin SDK
admin.initializeApp();

// Define a Cloud Function
exports.createOrder = functions.https.onRequest(async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type, referer');
  
    // Extract data from the POST request
    const data = req.body;

    try {
        // Add the data to the Firebase Realtime Database
        // await admin.database().ref('pick-up').push(data);

        const firestore = admin.firestore();
        const docRef = await firestore.collection('req-pick-up').add(data);

        // Respond with a success message
        res.status(200).send('ok');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error adding data');
    }
});