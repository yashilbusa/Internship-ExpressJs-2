//Categorized Users by their fruit

db.test.aggregate([
    {
      '$group': {
        '_id': '$favoriteFruit', 
        'UserCount': {
          '$push': '$name'
        }
      }
    }
])