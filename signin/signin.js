const email = document.getElementById("email");
const pass = document.getElementById("password");
const button = document.getElementById("signin");
var finish = 0;
button.addEventListener("click", validate);
button.addEventListener("click", () => {
  if (finish == 1) {
    fetch("http://localhost:1002/users", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        const comparision = data.find((ele) => ele.email === email.value);
        if (
          comparision.email === email.value &&
          comparision.password === pass.value
        ) {
          alert("Logged in Successfully!");
          localStorage.setItem("token", JSON.stringify(Date.now()));
          localStorage.setItem("id", JSON.stringify(comparision.id));
          window.location.href = "../appointment/register.html";
        } else {
          alert("You are not registered in!");
        }
      });
  }
});

function validate() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

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
  finish = 1;
}
