//How many users are active?
db.test.aggregate([
        {
          '$match': {
            'isActive': true
          }
        }, {
          '$count': 'activeUsers'
        }
])