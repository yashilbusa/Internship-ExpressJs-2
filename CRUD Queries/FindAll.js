use('todolist');

db.todos.find({
    userId:1
});

/*

{ _id: ObjectId("67b45d7e6d28e8078efceb9e"),
  userId: 1,
  id: 2,
  title: 'quis ut nam facilis et officia qui',
  completed: false,
  __v: 0 }
{ _id: ObjectId("67b45d7e6d28e8078efceba0"),
  userId: 1,
  id: 3,
  title: 'fugiat veniam minus',
  completed: false,
  __v: 0 }
{ _id: ObjectId("67b45d7e6d28e8078efceba2"),
  userId: 1,
  id: 4,
  title: 'et porro tempora',
  completed: true,
  __v: 0 }
{ _id: ObjectId("67b45d7e6d28e8078efceba4"),
  userId: 1,
  id: 5,
  title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
  completed: false,
  __v: 0 }
{ _id: ObjectId("67b45d7e6d28e8078efceba6"),
  userId: 1,
  id: 6,
  title: 'qui ullam ratione quibusdam voluptatem quia omnis',
  completed: false,
  __v: 0 }
{ _id: ObjectId("67b45d7e6d28e8078efceba8"),
  userId: 1,
  id: 7,
  title: 'illo expedita consequatur quia in',
  completed: false,
  __v: 0 }
{ _id: ObjectId("67b45d7e6d28e8078efcebaa"),
  userId: 1,
  id: 8,
  title: 'quo adipisci enim quam ut ab',
  completed: true,
  __v: 0 }
{ _id: ObjectId("67b45d7e6d28e8078efcebac"),
  userId: 1,
  id: 9,
  title: 'molestiae perspiciatis ipsa',
  completed: false,
  __v: 0 }
{ _id: ObjectId("67b45d7e6d28e8078efcebae"),
  userId: 1,
  id: 10,
  title: 'illo est ratione doloremque quia maiores aut',
  completed: true,
  __v: 0 }
{ _id: ObjectId("67b4630df5cbcc6d6ffeff4a"),
  userId: 1,
  id: 1,
  title: 'Learn MongoDB',
  completed: false }

*/