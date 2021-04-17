const express = require("express");
const app = express(); //handling a request for single spl path only
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "angularcurd",
  password: "12345",
  port: 5432,
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requpested-With,Content-Type,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET",
    "POST",
    "PATCH",
    "DELETE",
    "OPTIONS"
  );
  next();
});



//use a middleware on our app and on in oming requests
app.post("/api/adddoctor", (req, res) => {
  const doctor = req.body;
  console.log(doctor);
  try {
    const doctorName = req.body.docName;
    const doctorid = req.body.docId;
    const doctorspecialist = req.body.specialist;
    console.log(doctorName);
    //const {doc,doctorid,doctorspecialist} = req.body;
    const newdoctor = pool
      .query(
        "INSERT INTO doctor (docid,docname,specialist) VALUES ($1,$2,$3) RETURNING *",
        [doctorid, doctorName, doctorspecialist]
      )
      .then(() => {
        console.log("inserted");
        res.status(201).json({
          message: "doctor added",
        });
      })
      .catch(() => {
        return res.status(201).json({
          message: "This is an error!",
        });
      });
  } catch (err) {
    console.log(err.message);
  }
});


app.post("/api/addappointment", (req, res) => {
    const appointment = req.body;
    console.log(appointment);
    try {
      const memberid = req.body.memberId;
      const docid = req.body.docid;
      const appointdate = req.body.appointDate;
    const slots= req.body.duration;
    // const {,,,slots}=req.body;
      console.log(memberid);
      //const {doc,doctorid,doctorspecialist} = req.body;
      const newdoctor = pool
        .query(
          "INSERT INTO appointment (memberid,doctorid,appointmentdate,slots) VALUES ($1,$2,$3,$4) RETURNING *",
          [memberid, docid,appointdate,slots]
        )
        .then(() => {
          console.log("inserted");
          res.status(201).json({
            message: "doctor added",
          });
        })
        .catch(() => {
          return res.status(201).json({
            message: "This is an error!",
          });
        });
    } catch (err) {
      console.log(err.message);
    }
  });


  app.post("/api/addpackage", (req, res) => {
    const package = req.body;
    console.log(package);
    try {

       
      const packname = req.body.packname;
      const packamount = req.body.amount;
      const packdays = req.body.days;
    const slots= req.body.duration;
    // const {,,,slots}=req.body;
      
      //const {doc,doctorid,doctorspecialist} = req.body;
      const newdoctor = pool
        .query(
          "INSERT INTO  package (packagename,packageamount,packagedays) VALUES ($1,$2,$3) RETURNING *",
          [packname, packamount,packdays]
        )
        .then(() => {
          console.log("inserted");
          res.status(201).json({
            message: "doctor added",
          });
        })
        .catch(() => {
          return res.status(201).json({
            message: "This is an error!",
          });
        });
    } catch (err) {
      console.log(err.message);
    }
  });
app.get("/api/getdoctor", (req, res) => {
  try {
    const getdoc = pool.query("SELECT * from doctor", (error, data) => {
      if (error) {
        throw error;
      }
     return res.status(200).json(data);
    });
  } catch (error) {}

});

module.exports = app;
