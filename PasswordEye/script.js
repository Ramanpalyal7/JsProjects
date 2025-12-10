let inputfield = document.querySelector("#inputfield");
let eyeicon = document.getElementById("eye-slash");

eyeicon.onclick = function () {
  if (inputfield.type === "password") {
    inputfield.type = "text";
    eyeicon.className = "fa-solid fa-eye";
  } else {
    inputfield.type = "password";
    eyeicon.className = "fa-solid fa-eye-slash";
  }
};
{
  /* <i class="fa-solid fa-eye"></i>; */
}
