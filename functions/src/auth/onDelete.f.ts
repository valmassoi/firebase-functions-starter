import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

try { admin.initializeApp(functions.config().firebase); } catch (e) { }

/**
 *
 */
const handleAuthOnDelete = (userRecord: any) => {
  console.info("handleAuthOnDelete", userRecord);
  return;
}

exports = module.exports = functions.auth
  .user()
  .onDelete((userRecord: any) => handleAuthOnDelete(userRecord));
