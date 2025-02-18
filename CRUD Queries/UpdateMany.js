use('todolist');

db.todos.updateMany({userId:1},{$set:{userId:2}})
