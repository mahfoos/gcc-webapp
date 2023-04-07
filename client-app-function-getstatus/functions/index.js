const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const cors = require('cors')({origin: true});
exports.getOrderStatus = functions.https.onRequest(async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type, referer');
    const { orderId } = req.body;
    try {
        const querySnapshot = await admin.firestore().collection('req-pick-up').where('orderId', '==', orderId).get();
        if (!querySnapshot.empty) {
        const docSnapshot = querySnapshot.docs[0];
        const { status } = docSnapshot.data();
        res.json({ status });
        } else {
        res.json({ status: null });
        }
    } catch (error) {
        console.error(error);
        res.json({ status: null });
    }
});