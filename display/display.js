fetch("http://localhost:1002/user_info")
.then(function(response){
    return response.json();
})
.then(function(data){
    let placeholder = document.querySelector("#data-output");
    let out = "";
    //console.log(data);
    for(let users of data){
        out +=`
            <tr>
            <td>${users.email}</td>
            <td>${users.name}</td>
            <td>${users.mob}</td>
            <td>${users.id}</td>
            <td>${users.name}</td>
            <td>${users.gender}</td>
            <td>${users.dob}</td>
            <td>${users.mob}</td>
            <td>${users.email}</td>
            <td>${users.doctor}</td>
            <td>${users.desc}</td>
            <td>${users.time}</td>
            <td>${users.id}</td>
            </tr>
        `;
    }
    placeholder.innerHTML=out;

})