export default (alt, storage, storageName) => {
    try {
        alt.bootstrap(storage.get(storageName))
    } catch(e) {
        console.error('Failed to load bootstrap data', e);
    }

    alt.FinalStore.listen( () => {
        if(!storage.get('debug')){
            storage.set(storageName, alt.takeSnapshot());
        }
    });
}