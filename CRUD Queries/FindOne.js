use('todolist');

db.todos.findOne({
    userId:1
});

/*

{ _id: ObjectId("67b45d7e6d28e8078efceb9e"),
  userId: 1,
  id: 2,
  title: 'quis ut nam facilis et officia qui',
  completed: false,
  __v: 0 }

*/