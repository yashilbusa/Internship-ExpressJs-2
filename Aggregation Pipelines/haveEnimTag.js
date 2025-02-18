//How many users have 'enim' as one of the tags?
db.test.aggregate([
    {
      '$match': {
        'tags': 'enim'
      }
    }, {
      '$count': 'Count'
    }
])