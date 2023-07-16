const email = document.getElementById("email");
const uname = document.getElementById("name");
const mob = document.getElementById("mob");
const pass = document.getElementById("password");
const button = document.getElementById("signup");
var finish = 0;
button.addEventListener("click", validate);

button.addEventListener("click", () => {
  if (finish == 1) {
    const dataobj = {
      email: email.value,
      name: uname.value,
      mob: mob.value,
      password: pass.value,
    };
    fetch("http://localhost:1002/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataobj),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Account created successfully!");
        window.location.href = "../signin/signin.html";
      });
    window.location.href = "../signin/signin.html";
  }
});

function validate() {
  const uname = document.getElementById("name").value;
  const mobile = document.getElementById("mob").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (uname == "") {
    alert("Please enter your name");
    return false;
  }

  if (mobile == "") {
    alert("Please enter your mobile number");
    return false;
  } else if (mobile.length != 10 || isNaN(mobile)) {
    alert("Please enter a 10 digit valid mobile number");
    return false;
  }

  let at = email.indexOf("@");
  let dot = email.lastIndexOf(".");
  console.log(at, dot);
  if (email == "") {
    alert("Please enter your email");
    return false;
  } else if (at < 3 || dot - at < 3 || dot == email.length - 1) {
    alert("Please enter a valid email address");
    return false;
  }

  if (password == "") {
    alert("Pleae enter password");
    return false;
  } else if (password.length < 6 || password.length > 14) {
    alert("Password must be 6 to 14 character long");
    return false;
  }
  return (finish = 1);
}
