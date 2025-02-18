//Find Average group by Gender
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


//Find Simple average based on age
db.test.aggregate([
  {
    '$group': {
      '_id': null, 
      'averageAge': {
        '$avg': '$age'
      }
    }
  }
])