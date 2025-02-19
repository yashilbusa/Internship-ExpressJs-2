//How many users have a phone number starting with '+1 (940)'?

db.test.aggregate([
    {
      '$match': {
        'company.phone': new RegExp('^\+1 \(940\)')
        }
    }, {
       '$count': 'Count'
    }
])