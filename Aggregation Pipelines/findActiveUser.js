db.test.aggregate([
        {
          '$match': {
            'isActive': true
          }
        }, {
          '$count': 'activeUsers'
        }
])