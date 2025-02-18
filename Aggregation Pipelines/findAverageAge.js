db.test.aggregate([
    {
      '$group': {
        '_id': '$gender', 
        'averageAge': {
          '$avg': '$age'
        }
      }
    }
])