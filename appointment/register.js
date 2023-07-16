const uname=document.getElementById("name");
const gender=document.getElementById("gender");
const dob=document.getElementById("dob");
const mob = document.getElementById("mob");
const email=document.getElementById("email");
const doct=document.getElementById("doctors");
const desc=document.getElementById("desc");
const times=document.getElementById("times");
const button= document.getElementById("subt");

button.addEventListener("click", () =>{
    const dataobj = {
        name: uname.value,
        gender: gender.value,
        dob: dob.value,
        mob: mob.value,
        email: email.value,
        doctor: doct.value,
        desc: desc.value,
        time:times.value,
    };
    fetch("http://localhost:1002/user_info",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(dataobj),
    })
    .then((res) => res.json())
    .then((data) => {
        alert("Registed successfully!");
    });
});