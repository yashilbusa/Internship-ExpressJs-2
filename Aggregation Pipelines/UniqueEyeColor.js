//List all unique eye colors present in the collection 
db.test.aggregate([
    {
      $group: {
        _id: "$eyeColor"
      }
    }
])