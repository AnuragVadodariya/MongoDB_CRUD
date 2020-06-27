const {MongoClient,ObjectID}=require('mongodb');
ConnectionURL='mongodb://127.0.0.1:27017';
ConnectDBName='crud_db';
MongoClient.connect(ConnectionURL,{useUnifiedTopology:true},(err,client) => {
    if(err){
        return console.log('Unable to connect');
    }
    const db=client.db(ConnectDBName);

    // user deleteOne()

    db.collection('friends_list').deleteOne({
        _id:new ObjectID("5eed8eab0b652109f02e3364")
    }).then((result) => {
        console.log(result)
    }).catch((err) => {
        console.log(err)
    })

    //User deleteMany()

    db.collection('friends_list').deleteMany({
        age:22
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
    
    db.collection('friends_list').deleteMany({
        age:18
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})
