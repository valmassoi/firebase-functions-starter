const functions = require('firebase-functions');
const admin = require('firebase-admin');
try { admin.initializeApp(functions.config().firebase); } catch (e) { }

/**
 * Creates a new user document in firestore
 */
export const createNewUser = async (userRecord: any) => {
  console.info("createNewUser", userRecord);
  const { uid, email } = userRecord;
  const newUserRecord = {
    uid,
    email,
    createdAt: new Date().getTime(),
  };
  const userDocRef = admin.firestore().collection('users').doc(email.toLowerCase());
  await userDocRef.set(newUserRecord);
  return;
}

exports = module.exports =  functions.auth
  .user()
  .onCreate((userRecord: any) => createNewUser(userRecord));
