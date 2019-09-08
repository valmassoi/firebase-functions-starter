const functions = require('firebase-functions');
const admin = require('firebase-admin');
try { admin.initializeApp(functions.config().firebase); } catch (e) { }

/**
 *
 */
export const handleAuthOnDelete = async (userRecord: any) => {
  console.info("handleAuthOnDelete", userRecord);
  return;
}

exports = module.exports = functions.auth
  .user()
  .onDelete((userRecord: any) => handleAuthOnDelete(userRecord));
