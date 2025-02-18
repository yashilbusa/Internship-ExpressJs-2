// Find Age Count Between 21 and 25 (22,23,24)
db.test.aggregate([
    {
      '$match': {
        'age': {
          '$gt': 21
        }
      }
    }, {
      '$match': {
        'age': {
          '$lt': 25
        }
      }
    }, {
      '$group': {
        '_id': '$age', 
        'count': {
          '$sum': 1
        }
      }
    }
])