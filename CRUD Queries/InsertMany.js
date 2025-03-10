use('todolist');

db.todos.insertMany([
    {
        userId: 1,
        id: 1,
        title: "Learn MongoDB",
        completed: false
    },
    {
        userId: 1,
        id: 11,
        title: "Learn JavaScript",
        completed: true
    },
    {
        userId: 1,
        id: 12,
        title: "Learn NodeJS",
        completed: true
    },
    {
        userId: 1,
        id: 13,
        title: "Learn ExpressJS",
        completed: true
    },
]);