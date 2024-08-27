// Tambahkan kode JavaScript kalian di file ini
document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.getElementById("burger-menu");
  const navLinks = document.getElementById("nav-links");

  burgerMenu.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});
function handleGetFormData() {
  return {
    name: document.getElementById("name").value,
    city: document.getElementById("city").value,
    email: document.getElementById("email").value,
    zipCode: document.getElementById("zip-code").value,
    status: document.getElementById("status").checked,
  };
}

function isNumber(str) {
  return !isNaN(str);
}

function checkboxIsChecked() {
  return document.getElementById("status").checked;
}

function validateFormData(data) {
  return (
    data !== null &&
    data.name.trim() !== "" &&
    data.city.trim() !== "" &&
    data.email.trim() !== "" &&
    isNumber(data.zipCode) &&
    checkboxIsChecked()
  );
}

function submit() {
  event.preventDefault();
  const formData = handleGetFormData();
  const warningDiv = document.getElementById("warning");

  if (!validateFormData(formData)) {
    warningDiv.innerText = "Periksa form anda sekali lagi";
  } else {
    warningDiv.innerText = "";
    console.log("Form data is valid:", formData);
  }
}

document.getElementById("user-form").addEventListener("submit", submit);
