const userData = require("../userData.json")
const user = (req,res)=>{
    console.log("llll1")
    res.send(userData)
}
const fiterUser = (req,res)=>{
    const {age,title} = req.query;

    console.log(age,title,"llll2")
    if(age && title){
        const a = userData.data.filter((a)=>{ if(Number(a.dob.age) ==Number(age) && a.name.title == title ) return a})
        res.send(a)
    }
    else if(age){
        const a = userData.data.filter((a)=>{ if(Number(a.dob.age) ==Number(age) ) return a})
        res.send(a)
    }
    else if(title){
        const a = userData.data.filter((a)=>{ if(a.name.title == title ) return a})
        res.send(a)
    }
    else{
        res.status(404)
    }
}
const filterByGender = (req,res)=>{
    console.log("llll3")
    const a = userData.data.filter((a)=>{ if(a.gender == req.params.uuid) return a})
    res.send(a)
}



module.exports = {user,fiterUser,filterByGender}
