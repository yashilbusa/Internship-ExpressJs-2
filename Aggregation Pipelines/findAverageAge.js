//Average age group by Gender
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


//What is the average age of all users?
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