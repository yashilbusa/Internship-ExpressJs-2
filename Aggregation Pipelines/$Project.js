//What are Names and age of users who are inactive and have 'velit' as a tag?
db.test.aggregate([
    {
      '$match': {
        'tags': 'enim', 
        'isActive': false
      }
    }, {
      '$project': {
        'name': 1, 
        'age': 1
      }
    }
])