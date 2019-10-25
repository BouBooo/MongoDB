// 1
db.firstcollec.find();

// 2
db.firstcollec.find(
    {}, {name:1, restaurant_id:1, borough:1, cuisine:1}
);

// 3
db.firstcollec.find(
    {}, {_id:0, name:1, restaurant_id:1, borough:1, cuisine:1}
);

// 4
db.firstcollec.find(
    {}, {_id:0, name:1, restaurant_id:1, borough:1, cuisine: 1, "address.zipcode":1}
);

// 5
db.firstcollec.find({borough: {
    $in : ['Bronx']
}}, {borough:1})

// 6
db.firstcollec.find({borough: {
    $in : ['Bronx']
}}, {borough:1}).limit(5)

// 7
db.firstcollec.find({borough: {
    $in : ['Bronx']
}}, {borough:1}).skip(5).limit(5)

// 8
db.firstcollec.find({"grades.score": {
    $gt : 90
}}, {grades:1})

// 9
db.firstcollec.find({"grades.score": {
    $in : [
        80, 100
    ]
}}, {"grades.score":1})


// 10
db.firstcollec.find({
    "address.coord.0" : {
        $lt : -95.754168
    }
})

// 11
db.firstcollec.count(
    {
        cuisine : {
            $nin : ["American "]
        },
        "grades.score" : {
            $gt : 70
        },
        "address.coord.0" : {
            $lt : -65.754168
        }
    }
)

// 12 
db.firstcollec.count({
    $and : [
        {
            cuisine : {
                $nin : ["American "]
            }
        },
        {
            "grades.score" : {
                $gt : 70
            }
        },
        {
            "address.coord.0" : {
                $lt : -65.754168
            }
        }
    ]
})

// 13 

// TODO

// 14
db.firstcollec.find({
    name: /^Wil.*/
}, {_id:1, name:1, borough:1, cuisine:1})

// 15
db.firstcollec.find({
    name: /.*ces$/
}, {_id:1, name:1, borough:1, cuisine:1})

// 16
db.firstcollec.find({
    name: /Reg/
}, {_id:1, name:1, borough:1, cuisine:1})

// 17
db.firstcollec.find({
    $and : [
        {
            borough: "Bronx"
        },
        {
            cuisine : {
                    $in : [
                    "American ", "Chinese"
                ]
            }
        }
    ]
})

// 18
db.firstcollec.find({
    $and : [
        {
            borough : {
                    $in : [
                    "Staten Island", "Brooklyn", "Bronx"
                ]
            }
        }
    ]
}, {_id:1, name:1, borough:1, cuisine:1})

// 19
db.firstcollec.find({
    $and : [
        {
            borough : {
                    $nin : [
                    "Staten Island", "Brooklyn", "Bronx"
                ]
            }
        }
    ]
}, {_id:1, name:1, borough:1, cuisine:1})

// 20
db.firstcollec.count({
    "grades.score" : {
        $lt : 10
    }
}, {_id:1, name:1, borough:1, cuisine:1})


// 21
db.firstcollec.find({
    $or: [{
        name: /^Wil.*/
    }, {
        cuisine : {
                    $in : [
                    "American ", "Chinese"
                ]
            }
    }] 
}, {_id:1, name:1, borough:1, cuisine:1})

// 22
db.firstcollec.find({
    $and : [
        {
            "grades.grade" : "A"
        },
        {
            "grades.score" : 11
        },
        {
            "grades.date" : ISODate("2014-08-11T00:00:00Z")
        }
    ]
}, {_id:1, name:1, grades:1})

// 23
db.firstcollec.find({
    $and : [
        {
            "grades.1.grade" : "A"
        },
        {
            "grades.1.score" : 9
        },
        {
            "grades.1.date" : ISODate("2014-08-11T00:00:00Z")
        }
    ]
}, {_id:1, name:1, grades:1})

// 24


// 25
db.firstcollec.insert({
    address: {
        street: "Rue de Blaye",
        zipcode: "33200"
    },
    cuisine: "HomeMade",
    grades: [
        {
            grade: "A",
            score: 3
        },
        {
            grade: "A",
            score: 4
        },
        {
            grade: "A",
            score: 6
        }
    ],
    name: "La Cuisine de BouBooo",
    restaurant_id: "5859"

})


// 26
db.firstcollec.update({
    restaurant_id : "5859"
}, {
    $addToSet: {
        grades: {
            $each : [
            {
                grade: "A",
                score: 85
            },
            {
                grade: "A",
                score: 15
            }]
        }
    }
}, { upsert: true})


// 27
db.firstcollec.remove({
    borough : "Staten Island"
})

// 28
db.firstcollec.updateMany({
    borough : "Manhattan"
}, {
    $set : {
        borough : "Brooklyn"
    }
})

// 29
db.firstcollec.find({ borough : "Manhattan"})
// -> 0 Results