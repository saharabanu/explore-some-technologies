/*
video 1.
1. what is aggregation?




video 2:

1. $match aggregate operator: find er kaj e match er kaj;
match er age project kora jabena,kaj korbe jodi oi field ta oikhane thake
db.practise.aggregate([
    {$match : {gender: "male", age: {$gt:18}}},
    {$project : {age: 1}}......,
])




video 3: 

1. $addFields stage : kono filed add kora jai ei ta diye. eti original data k modify korena.

db.practise.aggregate([
    new field add hobe sob datatei
    {$addFields : {salary: 12}}......,
    for checking
    {$project: {salary: 1}}

    but sob gulute to aki salary hobena tai randomly set korte hobe ei gulu follow korte hobe

    {$addFields : {salary: {

        $toInt: {
            $floor:{
            $multiply:[{$rand: {}}, 100]
        }
        }
    }}},
    data add korte $out use korte hobe
    {$out: "newcollection name"}
])




Video-4:

jodi new collection na toiri korte cai tahole $merge korte hobe,

{$merge: "practise"}$addtofield er pore ,sobar last e add korte hobe, $out bad dite hobe 
1. $group: eti grouping korar jonno use kora hoi, eita unique hobe, _id must dite hobe. aki rokom koita data ase ta ber kortei group kora. that means unique combination

$use kora hoi dui jaiagai, $gt, abar $fileld name, mockaru fake date tori website
db.practise.aggregate([
    {$group: { _id: '$gender'}},
    jodi multiple dekhtecai
     {$group: { _id: '{gen:$gender', age: '$age'}}},
    
])



video 5:
_id jodi null dei return korbe se null mane sob mile null korbe, _id na dile accumolator hisebe nei

jodi koit 34 age er lok ase ta count korte
1. $group more,
db.practise.aggregate([
    {$match: {age: {$gt:18}}},
    {$group: { _id: '$gender'}},
    jodi multiple dekhtecai
     {$group: { _id: '{gen:$gender', age: '$age'}, count: {$sum: 1}}},

     jodi _id na dekhte cai tahole new project stage stage korte hobe
     {$project: {
        _id:0,
        refere korte hobe,
        salary: $_id
        count: 1


     }}
     sort stage
     {$sort: {
        _id: 1 dile accesnding, -1 dile descending
     }}

     sort er por limit kora jai
     {$limit: 3}
    
])



video -6:

1. akta stage onek bar use kora jai

db.practise.aggregate([
    {$match: {age:18}},
    {$match: {gender: "male"}},
    {$group:{
        _id: "null",
        count: {$sum: 1},
        total salary sum korte
        totalSalary: {$sum: '$salary'},
        minSalary: {$min: "$salary"},
        averageSalary: {$abg: "$salary"},
        maxSalary: {$max: "$salary"},
        maxSalary: {$max: "$salary"},
    }},
    {$project: {
        count:1,
        totalSalary:1,
        minSalary:1,
        maxSalary:1,
         averageSalary:1

        salaryRange:{$subtract: ["$maxSalary", "$minSalary"]

        }
    }}
])



video -7: 
array er element gulu k niye new new document make korbe, totata make hobe jotota arrayer moddhe ase, $unwind
  1. $unwind: 
   db.practise.aggregate([
    group korar age unwind korte hoi
    {$unwind: '$education'},

    {$group: {
        _id: '$education'
    }},
   ])


video-8:

1. Explore Multi Stage Pipeline


$facet

db.practise.aggregate([
    {$match: {_id: ObjectId("numbrid")}}
    {$facet: {
        //sub pipeline
        "friendsCount":[
            // stage
            {$project: {friendsCount: {$size: '$friends'}}}
        ]
    },
    "interestCount":[
        .......
    ]
}
   ])
*/