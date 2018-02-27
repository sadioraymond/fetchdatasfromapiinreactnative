import Album from './model';
const Realm = require('realm');


let realm = new Realm({
    schema: [Album],
    schemaVersion: 11,
    // migration: function(oldRealm, newRealm) {
    //   newRealm.deleteAll();    
    // }
   });

//Add to Databases
export function insertNewTodoList(tab){ 
    try {
      realm.write(() => {
        realm.create('Albums',
        {
            albumId:tab.albumId,
            id:tab.id,
            title:tab.title,
            url:tab.url,
            thumbnailUrl:tab.thumbnailUrl,
          }
      );
      console.log('tableau',tab);
    });
    } catch (e) {
      console.log("Error on creation",e);
    }
 };

   //list todolist
   export let queryAllTodoLists=realm.objects('Albums');

   export function erasedatabase(){
    realm.write(() => {
    let all=queryAllTodoLists;
    if(all){
        realm.delete(all);
    }
  });
  }

  export default new Realm(realm);