const mondodb=require('mongodb');
const MongoClient=mondodb.MongoClient;

connectionURL='mongodb://127.0.0.1:27017';
DataBaseName='crud_db';

MongoClient.connect(connectionURL,{useUnifiedTopology:true},(err,client) => {
    if(err){
        console.log('unable to connect');
    }

     const db=client.db(DataBaseName);

    // Create User_info Collection using insertOne()

    db.collection('user_info').insertOne({
        name:'Chintan',
        age:20,
        email:'chintan@gmail.com'
    });

    // Create tasks Collection using insertMany()

    db.collection('tasks').insertMany([
        {
            description:'Install Mongo DB',
            complete:true
        },
        {
            description:'Install Robo 3T',
            complete:true
        },
        {
            description:'Login System',
            complete:false
        }
    ],(err,result) => {
        if(err){
            return console.log('unable to insert data');
        }
        console.log(result.ops);
    });

    // Create friends_list Collection using insertMany()

    db.collection('friends_list').insertMany([
        {
            name:'anurag',
            age:21,
            job:'Web Developer',
            lan:['React JS','Node JS','ES6','JS','HTML','CSS3','Bootstrap 3']
        },
        {
            name:'Vaidip',
            age:20,
            job:'Web Disn',
            lan:['AI','Photo-Shop','After Effect']
        },
        {
            name:'Suresh',
            age:22,
            job:'Web Developer',
            lan:['PHP','JS','HTML','CSS3','Bootstrap 3']
        },
        {
            name:'BRIJESH',
            age:19,
            job:'Web Developer',
            lan:['React JS','Node JS','ES6','JS','HTML','CSS3','Bootstrap 3']
        },
        {
            name:'anurag',
            age:21,
            job:'Web Developer',
            lan:['PHP','JS','HTML','CSS3','Bootstrap 3']
        }
    ],(err,result) => {
        if(err){
            return console.log('Unable to insert data');
        }
        console.log('Data inserted');
    });
});