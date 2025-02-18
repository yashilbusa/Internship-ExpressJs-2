//Find Exact age to 35 and its count using '$eq'
db.test.aggregate([
    {
      '$match': {
        'gender': 'male', 
        'age': {
          '$eq': 35
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