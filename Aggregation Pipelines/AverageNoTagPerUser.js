//What is the average number of tags per user?
db.test.aggregate([
    {
      '$unwind': '$tags'
    }, {
      '$group': {
        '_id': '$_id', 
        'TagCounts': {
          '$sum': 1
        }
      }
    }, {
      '$group': {
        '_id': null, 
        'Average': {
          '$avg': '$TagCounts'
        }
      }
    }
])


//2nd Method
db.test.aggregate([
    {
      '$addFields': {
        'NumberOfTags': {
          '$size': {
            '$ifNull': ['$tags', []]
          }
        }
      }
    }, {
      '$group': {
        '_id': null, 
        'AverageNoOfTags': {
          '$avg': '$NumberOfTags'
        }
      }
    }
])