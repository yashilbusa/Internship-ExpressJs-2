use('todolist');

db.todos.updateOne({id:1},{$set:{title:"CRUD Operations"}})


db.todos.updateOne({id:3},{$unset:{title:""}})


db.todos.updateOne({id:3},{$inc:{userId:50}})
