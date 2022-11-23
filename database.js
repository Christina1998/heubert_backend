const {Client} = require('pg');

const client = new Client({
    host:"localhost",
    port: 5432,
    user: "postgres",
    password: "password",
    database: "postgres"
})

// client.connect()

// client.query('select * from leads_new', (err, res)=>{
//     console.log(res)
//     if(!err){
//         console.log(res.rows);
//     }else{
//         console.log(err)
//     }
//     client.end();
// })

module.exports = client