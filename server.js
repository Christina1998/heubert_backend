const client = require('./database.js')
const express = require('express');
const app = express();
const cors = require('cors')

app.listen(3300, ()=>{
    console.log("Sever is now listening at port 3000");
})

app.use(cors());


client.connect();
app.get('/users', (req, res)=>{

    client.query('select * from leads_new ORDER BY lead_number ASC', (err, result)=>{
        // console.log("res",result)
        if(!err){
            // console.log(result);
            res.send(result.rows)
        }
        else{
            console.log(err)
        }

        // if (error) {
        //     throw error
        //   }
        //   res.status(200).json(results.rows)
        // client.end();
    }); 
})

app.get('/lead-source', (req, res)=>{
    client.query("SELECT lead_source , COUNT(lead_source) as number_of_leads FROM leads_new GROUP BY lead_source;", (err, result)=>{
        console.log("result", result)
        if(!err){
            // console.log(result);
            res.send(result.rows)
        }
        else{
            console.log("Source Error", err)
        }
    })
})

app.get('/lead-origin', (req, res)=>{
    const data = "Organic Search"
    console.log("data", data)
    client.query(`SELECT lead_origin, COUNT(lead_origin) as no_of_leads FROM leads_new WHERE lead_source='${data}' GROUP BY lead_origin;`, (err, result)=>{
        console.log("result", result)
        if(!err){
            console.log(result);
            res.send(result.rows)
        }
        else{
            console.log("Source Error", err)
        }
    })
})




