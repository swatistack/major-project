 
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8080;
const Listing = require("./models/listing.js");

const MONGO_URL ='mongodb://127.0.0.1:27017/bookingapp';

async function main() {
 await mongoose.connect(MONGO_URL);
}
main().then(()=>{
 console.log("connected DB");
})
.catch((err)=>{
 console.log(err);
})
app.get("/",(req, res)=>{
res.send("here we go for checking this ");
})
app.listen(port,()=>{
console.log(`My server is running on this port ${port}`);
});

// app.get("/testlisting",(req,res)=>{
//  let  sampledata =new listing({
//   title:"firstpage",
//   decription:"heloo dosto",
//  )};
//  )};
  
app.get("/testlisten",async(req,res)=>{
 const sampleData = new Listing({
  title:"Sample Result",
  description:"Hello dosto this is my first string",
  price:1200,
  location:"meerut",
  country:"India"
 })
 await sampleData.save();
 console.log("data saved ");
 res.send("sucessfull saved");
})
