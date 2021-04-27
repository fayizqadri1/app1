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

    const newdoctor = pool
      .query(
        "INSERT INTO doctor (docid,docname,specialist) VALUES ($1,$2,$3) RETURNING *",
        [doctorid, doctorName, doctorspecialist]
      )
      .then(() => {
        console.log("inserted");
        res.status(201).json({
          message: "Doctor Has Been Added",
        });
      })
      .catch(() => {
        return res.status(201).json({
          message: "There is an error!",
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
    const slots = req.body.duration;
    const packageid = req.body.packageid;

    const newdoctor = pool
      .query(
        "INSERT INTO appointment (memberid,docid,packageid,appointdate,duration) VALUES ($1,$2,$3,$4,$5) RETURNING *",
        [memberid, docid, packageid, appointdate, slots]
      )
      .then(() => {
        console.log("inserted");
        res.status(201).json({
          message: "Appointment Has Been Added",
        });
      })
      .catch(() => {
        return res.status(201).json({
          message: "There is an error!",
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
    const packname = req.body.pack;
    const packamount = req.body.amount;
    const packdays = req.body.days;
    const slots = req.body.duration;

    const newdoctor = pool
      .query(
        "INSERT INTO  packageview (packagename,packageamount,packagedays) VALUES ($1,$2,$3) RETURNING *",
        [packname, packamount, packdays]
      )
      .then(() => {
        console.log("inserted");
        res.status(201).json({
          message: "Package Has Been Added",
        });
      })
      .catch(() => {
        return res.status(201).json({
          message: "There is an error!",
        });
      });
  } catch (err) {
    console.log(err.message);
  }
});

app.post("/api/addmember", (req, res) => {
  const package = req.body;
  console.log(package);
  try {
    const membername = req.body.memName;
    const memebergender = req.body.gender;
    const memberdob = req.body.dob;
    const phoneno = req.body.phone;
    const packageid = req.body.packageid;

    const newdoctor = pool
      .query(
        "INSERT INTO  memberviewone (packageid,membername,gender,birth_date,phoneNumber) VALUES ($1,$2,$3,$4,$5) RETURNING *",
        [packageid, membername, memebergender, memberdob, phoneno]
      )

      .then(() => {
        console.log("inserted");
        res.status(201).json({
          message: "Member Has Been Added",
        });
      })
      .catch(() => {
        return res.status(201).json({
          message: "There is an error!",
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

app.get("/api/getpackage", (req, res) => {
  try {
    const getdoc = pool.query("SELECT * from packageview ", (error, data) => {
      if (error) {
        throw error;
      }
      return res.status(200).json(data);
    });
  } catch (error) {}
});
app.get("/api/getmember", (req, res) => {
  const id = req.query.param1;
  console.log(id);

  try {
    const getdoc = pool.query(
      String(`SELECT * from memberviewone where memid=${id}`),
      (error, data) => {
        if (error) {
          throw error;
        }
        return res.status(200).json(data);
      }
    );
  } catch (error) {}
});

app.get("/api/getappointment", (req, res) => {
  try {
    const getdoc = pool.query(
      "SELECT appointmentid, appointdate, duration, docname, specialist,membername,birth_date,phonenumber,packagename,packagedays FROM appointment INNER JOIN doctor ON appointment.docid = doctor.docid Inner join memberviewone on appointment.memberid = memberviewone.memid inner join packageview on appointment.packageid =packageview.packageid order by appointmentid",
      (error, data) => {
        if (error) {
          throw error;
        }
        return res.status(200).json(data);
      }
    );
  } catch (error) {}
});

app.get("/api/viewmember", (req, res) => {
  try {
    const getdoc = pool.query(
      "select memid, membername,gender,birth_date,memcreated_on,memActive,phonenumber, packagename from memberviewone inner join packageview on memberviewone.packageid=packageview.packageid order by memid ",
      (error, data) => {
        if (error) {
          throw error;
        }
        return res.status(200).json(data);
      }
    );
  } catch (error) {}
});

app.get("/api/viewdoctor", (req, res) => {
  try {
    const getdoc = pool.query("select * from doctor ", (error, data) => {
      if (error) {
        throw error;
      }
      return res.status(200).json(data);
    });
  } catch (error) {}
});

app.get("/api/viewpackage", (req, res) => {
  try {
    const getdoc = pool.query("select * from packageview ", (error, data) => {
      if (error) {
        throw error;
      }
      return res.status(200).json(data);
    });
  } catch (error) {}
});

app.post("/api/addserviceplan", (req, res) => {
  const package = req.body;
  console.log(package);
  try {
 


     const careplan =req.body.careplan;
     const carecenter= req.body.carecenter
    const newdoctor = pool
      .query(
        "INSERT INTO  careplan (careplan,carecenter) VALUES ($1,$2) RETURNING *",
        [careplan, carecenter]
      )

      .then(() => {
        console.log("inserted");
        res.status(201).json({
          message: "Serice Has Been Added",
        });
      })
      .catch(() => {
        return res.status(201).json({
          message: "There is an error!",
        });
      });
  } catch (err) {
    console.log(err.message);
  }
});
app.get("/api/getserviceplan", (req, res) => {
  try {
    const getdoc = pool.query("select * from careplan ", (error, data) => {
      if (error) {
        throw error;
      }
      return res.status(200).json(data);
    });
  } catch (error) {}
});



app.post("/api/addoperationalsteps", (req, res) => {
  const package = req.body;
  console.log(package);
  try {
 


     const serviceplanid =req.body.serviceplanid;
     const activites= req.body.activites;
     const bc =req.body.bc;
     const pcm= req.body.pcm;
     const substeps =req.body.substeps;
     const howitisperformed= req.body.howitisperformed;
     const deliverables=req.body.deliverables;
     const serviceplannedondateofreg=req.body.serviceplannedondateofreg;

     console.log(serviceplannedondateofreg)
    const newdoctor = pool
      .query(
        "INSERT INTO  operationalsteps(serviceplanid,activites,bc,pcm,substeps,howitisperformed,deliverables,serviceplannedondateofreg) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *",
        [serviceplanid, activites,bc,pcm,substeps,howitisperformed,deliverables,serviceplannedondateofreg]
      )

      .then(() => {
        console.log("inserted");
        res.status(201).json({
          message: "Serice Has Been Added",
        });
      })
      .catch(() => {
        return res.status(201).json({
          message: "There is an error!",
        });
      });
  } catch (err) {
    console.log(err.message);
  }
});



  app.get("/api/getOperationalSteps", (req, res) => {
    const id = req.query.servicepid;
    console.log(id);
  
    try {
      const getdoc = pool.query(
        String(`SELECT * from operationalsteps where serviceplanid=${id}`),
        (error, data) => {
          if (error) {
            throw error;
          }
          return res.status(200).json(data);
        }
      );
    } catch (error) {}
  });
  
module.exports = app;
