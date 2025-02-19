db.test.aggergate([
    {
      '$lookup': {
        'from': 'authors', 
        'localField': 'author_id', 
        'foreignField': '_id', 
        'as': 'Details'
      }
    }, {
      '$addFields': {
        'authors_details': {
          '$first': '$Details'
        }
      }
    }
])