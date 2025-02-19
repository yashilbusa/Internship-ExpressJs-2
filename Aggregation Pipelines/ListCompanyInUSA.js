//List all companies located in the USA with their corresponding user count 

db.test.aggregate([
    {
        '$match': {
            'company.location.country': 'USA'
        }
    }, {
        '$count': 'UserCount'
    }
])