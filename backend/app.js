const express = require("express");
const app = express(); //handling a request for single spl path only
const bodyParser = require("body-parser");
const cors = require('cors')
app.use(bodyParser.json());

const { Pool } = require("pg");
const { data } = require("jquery");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "angularcurd",
  password: "12345",
  port: 5432,
});
app.use(cors())
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requpested-With,Content-Type,Accept"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET",
//     "POST",
//     "PATCH",
//     "DELETE",
//     "OPTIONS",
//     "PUT"
//   );
//   next();
// });

app.use
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
    const mmemid=req.body.memid
    const membername = req.body.memName;
    const memebergender = req.body.gender;
    const memberdob = req.body.dob;
    const phoneno = req.body.phone;
    const packageid = req.body.packageid;
    const sserviceplanid= req.body.serviceplanid;

    const newdoctor = pool
      .query(
        "INSERT INTO  memberviewone (memid,packageid,membername,gender,birth_date,phoneNumber,serviceplanid) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *",
        [mmemid,packageid, membername, memebergender, memberdob, phoneno,sserviceplanid]
      )

      .then(()=>{
        console.log("ist")
        if(sserviceplanid==1){
        pool.query (String(`INSERT INTO membercarecalendardetails (memid, serviceplanid, activites,bc,pcm,substeps,howitisperformed,deliverables,serviceplannedondateofreg,schedule) SELECT ${mmemid}, ${sserviceplanid}, activites,bc,pcm,substeps,howitisperformed,deliverables,serviceplannedondateofreg,memcreated_on + interval '1' day * serviceplannedondateofreg as schedule FROM operationalsteps cross join memberviewone where memid= ${mmemid} and operationalsteps.serviceplanid= ${sserviceplanid}`))
        .then(()=>{
          console.log('2nd')
          res.status(201).json({
            
            message: "Member Has Been Added",
          });

        }) .catch((e) => {
          console.log(e)
          return res.status(201).json({
            message: "There is an error!",
          });
        }); 
      }else if(sserviceplanid==2){

        pool.query (String(`INSERT INTO membercarecalendardetails (memid, serviceplanid, activites,bc,pcm,substeps,howitisperformed,deliverables,serviceplannedondateofreg,schedule) SELECT ${mmemid}, ${sserviceplanid}, activites,bc,pcm,substeps,howitisperformed,deliverables,serviceplannedondateofreg,memcreated_on + interval '1' day * serviceplannedondateofreg as schedule FROM operationalsteps cross join memberviewone where memid= ${mmemid} and operationalsteps.serviceplanid in (1,2)`))
        .then(()=>{
          console.log('2nd')
          res.status(201).json({
            
            message: "Member Has Been Added",
          });

        }) .catch((e) => {
          console.log(e)
          return res.status(201).json({
            message: "There is an error!",
          });
        }); 
      
      }
      else if(sserviceplanid==3){

        pool.query (String(`INSERT INTO membercarecalendardetails (memid, serviceplanid, activites,bc,pcm,substeps,howitisperformed,deliverables,serviceplannedondateofreg,schedule) SELECT ${mmemid}, ${sserviceplanid}, activites,bc,pcm,substeps,howitisperformed,deliverables,serviceplannedondateofreg,memcreated_on + interval '1' day * serviceplannedondateofreg as schedule FROM operationalsteps cross join memberviewone where memid= ${mmemid} and operationalsteps.serviceplanid in (1,2,3)`))
        .then(()=>{
          console.log('2nd')
          res.status(201).json({
            
            message: "Member Has Been Added",
          });

        }) .catch((e) => {
          console.log(e)
          return res.status(201).json({
            message: "There is an error!",
          });
        }); 
      
      }
        })
        
    
      .catch((e) => {
        console.log(e)
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
      "select memid, membername,gender,birth_date,memcreated_on,memActive,phonenumber,serviceplanid, packagename from memberviewone inner join packageview on memberviewone.packageid=packageview.packageid order by memid ",
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
          message: "Service Has Been Added",
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
          message: "Service Has Been Added",
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
        String(`SELECT * from operationalsteps where serviceplanid=${id} and serviceplan=1`),
        (error, data) => {
          if (error) {
            throw error;
          }
          return res.status(200).json(data);
        }
      );
    } catch (error) {}
  });
  

  
app.get("/api/carecalendar", (req, res) => {
  const memberid = req.query.memberid;
  const serviceid=req.query.serviceid;
  console.log(serviceid)
  try {
    if(serviceid==1){
    const getdoc = pool.query(
      String(`select opid ,serviceplanid,activites,bc,pcm,substeps,howitisperformed,deliverables,serviceplannedondateofreg,schedule,status from membercarecalendardetails where serviceplanid= 1 and memid=${memberid}  order by opid`),
      (error, data) => {
        if (error) {
          throw error;
        }
        //console.log(data)
        return res.status(200).json(data);
      }
    );
  } 

else if(serviceid==2){
  const getdoc = pool.query(
    String(`select opid ,activites,bc,pcm,substeps,howitisperformed,deliverables,serviceplannedondateofreg,schedule,status from membercarecalendardetails where memid=${memberid} and serviceplanid in (1,2) order by opid`),
    (error, data) => {
      if (error) {
        throw error;
      }
      //console.log(data)
      return res.status(200).json(data);
    }
  );
} 
else if(serviceid==3){
  const getdoc = pool.query(
    String(`select opid ,activites,bc,pcm,substeps,howitisperformed,deliverables,serviceplannedondateofreg,schedule,status from membercarecalendardetails where memid=${memberid} and serviceplanid in (1,2,3) order by opid`),
    (error, data) => {
      if (error) {
        throw error;
      }
      console.log(data)
      return res.status(200).json(data);
    }
  );
} 

 } catch (error) {}

});


app.post("/api/addmembercarecalendar", (req, res) => {
  const package = req.body;
  console.log(package);
  try {
    const memid=req.body.memid;
    const membername = req.body.memName;
    const memebergender = req.body.gender;
    const memberdob = req.body.dob;
    const phoneno = req.body.phone;
    const packageid = req.body.packageid;
    //const se
    const newdoctor = pool
      .query(
        "INSERT INTO  memberviewone (memid,packageid,membername,gender,birth_date,phoneNumber) VALUES ($1,$2,$3,$4,$5) RETURNING *",
        [memid,packageid, membername, memebergender, memberdob, phoneno]
      )

      .then(() => {
        console.log("inserted");
        pool.query("INSERT INTO membercarecalendardetails (memid, serviceplanid, activites,bc,pcm,substeps,howitisperformed,deliverables,serviceplannedondateofreg,schedule)SELECT memid, serviceplanid, activites,bc,pcm,substeps,howitisperformed,deliverables,serviceplannedondateofreg,memcreated_on + interval '1' day * serviceplannedondateofreg as shedule FROM operationalsteps cross join memberviewone")
        .then(()=>{
          res.status(201).json({
            message: "Member Has Been Added",
          });
        })
        
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


app.put("/api/updatecarecalendar", (req, res) => {
  const package = req.body;
  console.log(package.status);
  const memid =req.body.memberid;
    var date= req.body.getdate;
   const data =req.body.status;
    console.log('id',memid,date,data)
    console.log('date',date)
    console.log('data',data)


  try {

   const newdoctor = pool
     .query(String(`UPDATE membercarecalendardetails SET status = '${data}' WHERE memid = ${memid} and opid=${date}`
     )).then(() => {
       console.log("inserted");
       res.status(201).json({
         message: " Status has been Updated",
       });
     })
     .catch((e) => {
//console.log(e)
       return res.status(201).json({
         message: "There is an error!",
       });
     });
     
 } catch (err) {
   console.log(err.message);
 }
 
});




module.exports = app;
