//How many users have 'ad' second tag in their list of tags?

db.test.aggregate([
    {
      '$match': {
        'tags.1': 'ad'
      }
    }, {
      '$count': 'Count of 2nd Tag is ad'
    }
])