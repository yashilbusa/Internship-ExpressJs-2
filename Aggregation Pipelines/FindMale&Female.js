//Find The Total Number of Males and Females
db.test.aggregate([
    {
        '$group': {
          '_id': '$gender', 
          'count': {
            '$sum': 1
          }
        }
    }
])