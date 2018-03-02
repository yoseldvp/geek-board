import * as firebase from 'firebase';
import 'firebase/firestore';

import firestoreConfig from './firestore-config';

class GBFirestore {
  constructor () {
    if (!firebase.apps.length) {
      this.firestore = firebase.initializeApp(firestoreConfig);
    }
    this.db = this.firestore.firestore();
  }

  /**
   * This is a generic function aimed to store documents into firestore. It uses the 
   * autogenerate id feature from firestore, and returns a promise with the created or 
   * updated document.
   * @param {String} collection name to store into firestore
   * @param {String} document the json object representing the document to be saved
   */
  saveOrUpdate (collection, data, documentId) {
    const docRef = this.db.collection(collection).doc(documentId);
    return docRef.set(data, { merge: true });
  }

  /**
   * Generic method to load an specific document from firestore. It retuns a 
   * promise with the fetch data.
   * @param {String} collection 
   * @param {String} documentId the document to request
   */
  loadById (collection, documentId) {
    const docRef = this.db.collection(collection).doc(documentId);
    return docRef.get();
  }

  loadAll(collection) { 
    const collectionRef = this.db.collection(collection);
    return collectionRef.get()
  }
}

export default GBFirestore;
