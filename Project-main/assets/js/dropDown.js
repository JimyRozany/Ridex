/* show & hide drop down list */
const profileIcon = document.getElementById("profile-icon");
const dropDownCard = document.getElementById("dropDownCard");
profileIcon.addEventListener("click", () => {
  dropDownCard.style.display === "block"
    ? (dropDownCard.style.display = "none")
    : (dropDownCard.style.display = "block");
});
/* end show & hide drop down list */

// all options
const signup = document.getElementById("signup");
const login = document.getElementById("login");
const editProfile = document.getElementById("edit-profile");
const settingPrivacy = document.getElementById("setting-privacy");
//******** */

// select close buttons
const closeSignupCard = document.getElementById("close-signup-card");
const closeLoginCard = document.getElementById("close-login-card");
const closeEditProfileCard = document.getElementById("close-editprofil-card");
const closeSettingPrivacyCard = document.getElementById(
  "close-settingprivacy-card"
);

// all cards wrapper container
const containerCards = document.getElementById("container-cards");
const signupContainer = document.getElementById("sign-up-container");
const loginContainer = document.getElementById("login-container");
const editProfileContainer = document.getElementById("edit-profile-container");
const settingPrivacyContainer = document.getElementById(
  "setting-privacy-container"
);

/* show & hide cards after click on any option in drop down list */

// close cards
closeSignupCard.addEventListener("click", () => {
  containerCards.style.display = "none";
  signupContainer.style.display = "none";
});
closeLoginCard.addEventListener("click", () => {
  containerCards.style.display = "none";
  loginContainer.style.display = "none";
});
closeEditProfileCard.addEventListener("click", () => {
  containerCards.style.display = "none";
  editProfileContainer.style.display = "none";
});
closeSettingPrivacyCard.addEventListener("click", () => {
  containerCards.style.display = "none";
  settingPrivacyContainer.style.display = "none";
});

containerCards.style.display = "none"; // defalut value
signupContainer.style.display = "none"; // defalut value
loginContainer.style.display = "none"; // defalut value
editProfileContainer.style.display = "none";
settingPrivacyContainer.style.display = "none";

signup.addEventListener("click", () => {
  containerCards.style.display = "flex";
  signupContainer.style.display = "flex";
  dropDownCard.style.display = "none";
});

login.addEventListener("click", () => {
  containerCards.style.display = "flex";
  loginContainer.style.display = "flex";
  dropDownCard.style.display = "none";
});
editProfile.addEventListener("click", () => {
  containerCards.style.display = "flex";
  editProfileContainer.style.display = "flex";
  dropDownCard.style.display = "none";
});
settingPrivacy.addEventListener("click", () => {
  containerCards.style.display = "flex";
  settingPrivacyContainer.style.display = "flex";
  dropDownCard.style.display = "none";
});
/* end show & hide cards  */

// cancel button in setting & privacy card
const cancelBtnSetting = document.getElementById("cancel-btn-setting");

cancelBtnSetting.addEventListener("click", () => {
  containerCards.style.display = "none";
  settingPrivacyContainer.style.display = "none";
});

// Go to login and reverse
const btnSignin = document.getElementById("btn-signin-card");
btnSignin.addEventListener("click", () => {
  signupContainer.style.display = "none";
  loginContainer.style.display = "flex";
});
const btnSignup = document.getElementById("btn-signup-card");
btnSignup.addEventListener("click", () => {
  loginContainer.style.display = "none";
  signupContainer.style.display = "flex";
});

// edit profile
const changeFieldContainer = document.getElementById("change-field-container");
const btnChangeField = document.getElementById("btn-change-field");

const allFields = document.querySelectorAll(".field");

allFields.forEach((field) => {
  field.addEventListener("click", () => {
    changeFieldContainer.style.display = "flex";
    
  });
});

btnChangeField.addEventListener("click", () => {
  changeFieldContainer.style.display = "none";
});
