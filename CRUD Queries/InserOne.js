use('todolist');

db.todos.insertOne({
    userId: 1,
    id: 1,
    title: "Learn MongoDB",
    completed: false
});
