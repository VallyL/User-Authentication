const inputName = document.querySelector(".name");
const inputLastName = document.querySelector(".lastName");
const inputEmail = document.querySelector(".email");
const inputPassword = document.querySelector(".password");
const signUpBtn = document.querySelector(".signup");
const body = document.querySelector("body");
const siningUp = document.querySelector(".siningUp");
const logingIn = document.querySelector(".logingIn");

const users = localStorage.getItem("users")
  ? JSON.parse(localStorage.getItem("users"))
  : [];

signUpBtn.addEventListener("click", () => {
  const requiredPar = document.createElement("p");

  if (
    inputName.value === "" ||
    inputLastName.value === "" ||
    inputEmail.value === "" ||
    inputPassword.value === ""
  ) {
    requiredPar.innerText = "all fields are required";
    requiredPar.style.color = "white";
    requiredPar.style.fontSize = "12px";
  } else {
    let isError = false;

    for (let i = 0; i < users.length; i++) {
      if (users[i].email === inputEmail.value) {
        isError = true;
        break;
      }
    }

    if (isError) {
      requiredPar.innerText = "user with this email already exists";
      requiredPar.style.color = "white";
      requiredPar.style.fontSize = "12px";
    } else {
      const userData = {
        name: inputName.value,
        phoneNumber: inputLastName.value,
        email: inputEmail.value,
        password: inputPassword.value,
      };

      users.push(userData);
      localStorage.setItem("users", JSON.stringify(users));

      inputName.value = "";
      inputLastName.value = "";
      inputEmail.value = "";
      inputPassword.value = "";

      requiredPar.innerText = "you have successfully signed up";
      requiredPar.style.color = "green";
      requiredPar.style.fontSize = "12px";
    }
  }

  siningUp.appendChild(requiredPar);
});

const loginInputEmail = document.querySelector(".emailLogin");
const loginInputPassword = document.querySelector(".passwordLogin");
const loginBtn = document.querySelector(".login");

loginBtn.addEventListener("click", () => {
  const requiredPar = document.createElement("p");
  let isLoginError = true;

  for (let i = 0; i < users.length; i++) {
    if (
      loginInputEmail.value === users[i].email &&
      loginInputPassword.value === users[i].password
    ) {
      isLoginError = false;
      break;
    }
  }

  if (isLoginError) {
    if (loginInputEmail.value === "" || loginInputPassword.value === "") {
      requiredPar.innerText = "all fields are required";
      requiredPar.style.color = "white";
      requiredPar.style.fontSize = "12px";
    } else {
      requiredPar.innerText = "you entered the wrong email";
      requiredPar.style.color = "white";
      requiredPar.style.fontSize = "12px";
    }
  } else {
    loginInputEmail.value = "";
    loginInputPassword.value = "";

    requiredPar.innerText = "you have successfully logged in";
    requiredPar.style.color = "green";
    requiredPar.style.fontSize = "12px";

    body.innerHTML = "";
    const btnLogout = document.createElement("button");
    btnLogout.innerText = "Logout";
    body.appendChild(btnLogout);
  }

  logingIn.appendChild(requiredPar);
});
