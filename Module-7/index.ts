/*

module-7;

video 1:  
1.show all database:   command; show database;
2. kono file e jete : use name
3. kono kisu search korte db.getCollection("collection name").find().limit(2 or .....)
4. mongoose saraw aro onek website ase , studio 3t or no sql booster

vedio 2: 

1. mongodb operator
eqal($eq) , non equal, opearaor, leasthan , greater than


video 3:
1. implicit and $in age: {$in: [20, 40]}ja thakbe tai dekhabe
or $nin eigulu bad diye dekhabe

video 4: 
$and  onek gulu condtition ak korte ati use kora hoi { $and: [{gender: "female"}, {age: {$lt: 20}}]}
$or
eki rokom field use korle implicit@and  use kora jabena, explicit@and hobe, baki te implicit hobe.

implicit vs explicit


video 5: 
mongodb elemnt query
$exists, ai field ase kina , syntax {age: {$exists: true}} or false hoile ai data ta nai, oi data ta dibe, exists diye filed ta ase kina check kore only, value empty holew dibe

$type for type checkng syntax {age: {$type:'int'}} or 'string' 'array',

#size operator size for empty value cheking {age: {$size: 0}} or 1, 2, 3....


video 6: 
1. explore $all,  array er moddhe khuj kore, r jodi inedx onojayee khuje tahole 'age.0'; 23, position onojayee na check 
syntax {age: {$all: []56 or[hj,hry]}} valuer position change korle r match korbena tai, @nad er ceye all besi easier


2. $elemMatch, object niye kaj kore, oi dtata ber kore dibe
{$skilss.name: 'js},or 
{skillss: {$elemMatch :{'ds', 'sds'}
level: "ncn"
}} query exact kaj korle dekhabe,

video 7: update er khetre


db.practise.updateOne({
    "kake update korte cai"
},
{ki update korte cai}),
find({_id: objectId("id")})
updateOne(
    {_id: objectId("id")},
    {$set : {country:"nkk"}}
)
1. $set use korbo takhon jakhon new filed add korbo, array er khetre eita use korbona, primitiv e use korbo
2.$addToSet, takhon addToSet use korbo. eita kono akta exist field value upadte kore, age theke kono value thakle oita r add korbena
mulitiple value add korte caile each use korte hobe
updateOne(
    {_id: objectId("id")},
    {$addToset : {$each:{country:['djhs','dhshs']}}}
)
3.$push addtoset er moto kaj kore but aktu problem ase.push korle new vabe sob value set hoi eitai problem. r aita new array dei. tai addtoset better.










*/