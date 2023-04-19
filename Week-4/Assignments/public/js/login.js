const toSignin = document.getElementById("toSignin");
const toSignup = document.getElementById("toSignup");
const signupbtn = document.getElementById("signupbtn");
const signinbtn = document.getElementById("signinbtn");
const signinHeading = document.getElementById("signinHeading");
const signupHeading = document.getElementById("signupHeading");
const signinForm = document.getElementById("signinForm");
const signupForm = document.getElementById("signupForm");

function switchForm() {
  signinHeading.classList.toggle("hidden");
  signinForm.classList.toggle("hidden");
  signupHeading.classList.toggle("hidden");
  signupForm.classList.toggle("hidden");
}
toSignin.addEventListener("click", function () {
  switchForm();
});

toSignup.addEventListener("click", function () {
  switchForm();
});

//to insert warnings after inputs
function createWarning(input, text) {
  const warning = document.createElement("p");
  warning.className = "warning";
  warning.textContent = text;
  input.parentNode.insertBefore(warning, input.nextSibling);
}

//clear all warnings
function clearWarnings() {
  const warnings = document.getElementsByClassName("warning");
  for (let i = 0; i < warnings.length; i++) {
    warnings[i].remove();
  }
}

async function postRequest(url, object) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
}

signinbtn.addEventListener("click", async (e) => {
  e.preventDefault();
  clearWarnings();
  const emailInput = document.getElementById("signinEmail");
  const passwordInput = document.getElementById("signinPassword");

  const email = emailInput.value;
  const password = passwordInput.value;

  if (email === "" || password === "") {
    if (email === "") {
      createWarning(emailInput, "Email cannot be empty");
    }
    if (password === "") {
      createWarning(passwordInput, "Password cannot be empty");
    }
    return;
  }

  const { exist } = await postRequest("/account/checkEmailExist", { email });
  if (!exist) {
    createWarning(emailInput, "Email dose not exist");
    return;
  }
  const { user } = await postRequest("/account/checkEmailPassword", {
    email,
    password,
  });
  console.log(user);
  if (!user) {
    createWarning(passwordInput, "Password is incorrect");
    return;
  }
});

signupbtn.addEventListener("click", async (e) => {
  e.preventDefault();
  clearWarnings();
  const userNameInput = document.getElementById("signupUserName");
  const emailInput = document.getElementById("signupEmail");
  const passwordInput = document.getElementById("signupPassword");
  const confirmPasswordInput = document.getElementById("signupConfirmPassword");

  const userName = userNameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (
    userName === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    if (userName === "") {
      createWarning(emailInput, "UserName cannot be empty");
    }
    if (email === "") {
      createWarning(emailInput, "Email cannot be empty");
    }
    if (password === "") {
      createWarning(passwordInput, "Password cannot be empty");
    }
    if (confirmPassword === "") {
      createWarning(confirmPasswordInput, "Confirm Password cannot be empty");
    }
    return;
  }
  if (password !== confirmPassword) {
    createWarning(confirmPasswordInput, "Passwords do not match");
    return;
  }

  const { exist } = await postRequest("/account/checkEmailExist", { email });
  if (exist) {
    createWarning(emailInput, "Email has already been registered");
    return;
  }
  const { user } = await postRequest("/account/addUser", {
    userName,
    email,
    password,
  });
  console.log(user);
});
