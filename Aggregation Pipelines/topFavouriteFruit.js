//List the top common favourite fruits among the users
db.test.aggregate([
    {
      '$group': {
        '_id': '$favoriteFruit', 
        'count': {
          '$sum': 1
        }
      }
    }, {
      '$sort': {
        'count': -1
      }
    }, {
      '$limit': 1
    }
])