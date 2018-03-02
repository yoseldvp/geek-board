import GBFirestore from './firestore';

export class PersistenceService { 
  constructor (collection) {
    if (!collection) {
      throw new Error('Collection name must be specified');
    }
    this.collection = collection;
    this.db = new GBFirestore();
  }

  /**
   * Saves a entity to the db.
   * @param {Object} entity 
   */
  saveEntity (entity) {
    return this.db.saveOrUpdate(this.collection, entity);
  }

  /**
   * Gets an entity from the db given its id.
   * @param {String} userId 
   */
  loadEntity (id) {
    return this.db.loadById(this.collection, id);
  }

  /**
   * Loads all the documents from the collection
   */
  loadAll () {
    return this.db.loadAll(this.collection);
  }
}
