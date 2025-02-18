use('todolist');

db.todos.replaceOne({id:1},{userId:1,name:"Yashil Busa"})

/*
{ acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0 }
*/

/*
{
    "_id":{
        "$oid":"67b4630df5cbcc6d6ffeff4a"
    },
    "userId":1,
    "name":"Yashil Busa"
}
*/