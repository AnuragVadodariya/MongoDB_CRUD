const {MongoClient,ObjectID}=require('mongodb');

connectionURL='mongodb://127.0.0.1:27017';
MongoDBName='crud_db';

MongoClient.connect(connectionURL,{useUnifiedTopology:true},(err,client) => {
    if(err){
        return console.log('Unable to connect');
    }
    const db=client.db(MongoDBName);

    //update name of friend using updateOne()

    db.collection('friends_list').updateOne({
        // where
        _id:new ObjectID("5eed8eab0b652109f02e3364")
    },
    {
        $set:{
            name:'Kuldip'
        }
    }).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })

    // update job of friend using updateMany()

    db.collection('friends_list').updateMany({
        job:'Physics'
    },
    {
        $set:{
            job:'Space Science'
        }
    }).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err);
    })

    //update language of friend using updateMany()

    db.collection('friends_list').updateMany({
        lan:'physics'
    },
    {
        $set:{
            lan:'Science'
        }
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })

    //update age of friend using updateOne() & $inc that increase age + given Number (age:given Number)

    db.collection('friends_list').updateOne({
        _id:new ObjectID("5eed8a25257b2c094289e1f1")
    },
    {
        $inc:{
            age:1
        }
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })
})