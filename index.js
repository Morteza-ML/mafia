import express from "express";
import bodyParser from "body-parser";

const port= 3000;
const app =express();
const names = {
    name_user:["ali_Bo","morteza_Kh","reza_Mi","alireza_Sh"]
}

const ran_mafia=Math.floor(Math.random()*4);
const ran_doctor=Math.floor(Math.random()*4);
while (ran_mafia === ran_doctor){
    ran_doctor=Math.floor(Math.random()*4);
}

const data={
    li_users:[],
    li_shahr:[],
    mafia:undefined, 
    doctor:undefined, 
    flag_vrod_user:true,
    step_users:{},
}



 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/",(req,res)=>{
    res.render("partials/home.ejs",{names,data}); 
})
app.post("/game",(req,res)=>{
    const u_name=req.body["usernaem"];
    const vaz= shakhsiat(u_name);
    res.render("partials/game.ejs",{data, name: u_name,cia:vaz});
})
app.listen(port,()=>{
    console.log(`server starting in port ${port}`);
})



function shakhsiat (s){
    if(data.li_users.some(element=> element === s) !== true){
        data.li_users.push(s);
    }
    if (data.li_users.indexOf(s) === ran_mafia){
        data.mafia=s;
        return "mafia";
    }
    else if (data.li_users.indexOf(s) === ran_doctor){
        data.doctor=s;
        return "doctor";
    }
    else{
        data.li_shahr.push(s);
        return "shahr";
    }
}