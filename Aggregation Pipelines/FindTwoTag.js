//Find Users who have both 'enim' and 'id' as their tags

db.test.aggregate([
    {
      '$match': {
        'tags': {
          '$all': [
            'ad', 'enim'
          ]
        }
      }
    }, {
      '$project': {
        'name': 1, 
        'age': 1
      }
    }
])