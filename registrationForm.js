const username = document.getElementById("userName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const form = document.getElementById("form");

const checkValidation1 = (e) => {
  e.preventDefault();
  checkUsername();
  checkEmail();
  checkPass();
  checkPass2();
};

const checkUsername = () => {
  if (!username.checkValidity() || username.value == "") {
    document.getElementById("notValidUsername").style.display = "block";
    username.classList = "notValidBorder";
  } else {
    document.getElementById("notValidUsername").style.display = "none";
    username.classList = "validBorder";
  }

  // if (username.value.length < 3) {
  //   document.getElementById("notValidUsername").style.display = "block";
  //   username.classList.add("notValidBorder");
  // }
};

const checkEmail = () => {
  // if (!email.checkValidity()) {
  //   console.log(email.validationMessage);
  //   console.log("11111111111111");
  // }

  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(email.value.trim())) {
    document.getElementById("notValidEmail").style.display = "block";
    email.classList = "notValidBorder";
  } else {
    document.getElementById("notValidEmail").style.display = "none";
    email.classList = "validBorder";
  }
};

const checkPass = () => {
  if (!password.checkValidity() || password.value == "") {
    document.getElementById("notValidPass").style.display = "block";
    password.classList = "notValidBorder";
  } else {
    document.getElementById("notValidPass").style.display = "none";
    password.classList = "validBorder";
  }
};

const checkPass2 = () => {
  if (password2.value === password.value && password2.value != "") {
    document.getElementById("notValidPass2").style.display = "none";
    document.getElementById("notValidPass2req").style.display = "none";
    password2.classList = "validBorder";
  } else if (password2.value == "") {
    document.getElementById("notValidPass2").style.display = "none";
    document.getElementById("notValidPass2req").style.display = "block";
    password2.classList = "notValidBorder";
  } else {
    document.getElementById("notValidPass2").style.display = "block";
    document.getElementById("notValidPass2req").style.display = "none";
    password2.classList = "notValidBorder";
  }
};

form.addEventListener("submit", checkValidation1);
