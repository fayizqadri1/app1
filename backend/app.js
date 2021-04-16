const express= require('express');
const app= express();       //handling a request for single spl path only
const bodyParser=require("body-parser");

app.use(bodyParser.json());

const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'angularcurd',
    password: '12345',
    port: 5432,
  })

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin',"*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requpested-With,Content-Type,Accept");
    res.setHeader("Access-Control-Allow-Methods",
    "GET","POST","PATCH","DELETE","OPTIONS"
    )
    next();
});


// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res) 
//   pool.end() 
// })


//use a middleware on our app and on in oming requests
app.post("/api/adddoctor",(req,res)=>{
     const doctor= req.body;
    console.log(doctor)
        try {
     
     const  doctorName=req.body.docName;
     const  doctorid=req.body.docId;
       const  doctorspecialist=req.body.specialist;
       console.log(doctorName);
       //const {doc,doctorid,doctorspecialist} = req.body;
        const newdoctor =  pool.query("INSERT INTO doctor (docid,docname,specialist) VALUES ($1,$2,$3) RETURNING *",
        [doctorid,doctorName,doctorspecialist]
        ).then(()=>{
            console.log('inserted')
        res.status(201).json({
              message:'doctor added'
            });

        })
        .catch(()=>{
            return res.status(201).json({
                message: 'This is an error!'
             });
           
        })
    
        
        } 
        catch (err) {
       
         console.log(err.message);
       


        }
     

 
});

// const getAll = (request, response) => {
//     db.query('SELECT * FROM data.person;SELECT * FROM data.animal', (error, data) => {
//       if (error) {
//         throw error;
//       }
//       response.status(200).json({people: data[0].rows, animals: data[1].rows});
//     })
  
//   app.get('/all', getAll);
app.get("/api/getdoctor",(req,res)=>{
try {
    const getdoc =  pool.query("SELECT * from doctor",(error,data)=>{
        if (error) {
            throw error;
          }
          res.status(200).json(data);
    })


   

} catch (error) {
    
}
  
   
      




    // const getdoc= pool.query("SELECT docName FROM doctor")
    // res.send(getdoc)
    // console.log(getdoc+"testing")
    // .then(()=>{
    //     res.send(getdoc)
    //     console.log(getdoc)
    // }).catch((error)=>{
    //     res.send(error)
    // })

})

 

module.exports=app;