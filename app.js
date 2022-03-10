let email = document.getElementById("email");
const sendBtn = document.querySelector(".send-btn");
const errorMsg = document.querySelector(".error-msg");

sendBtn.addEventListener("click", function () {
   let innerText = email.value;
   if (innerText.includes("@")) {
      Swal.fire({
         position: "center",
         icon: "success",
         title: "We will send your email",
         showConfirmButton: false,
         timer: 1500,
      });
      email.value = "";
   } else {
      errorMsg.style.display = "inline-block";
      email.style.background = "url(../images/icon-error.svg) no-repeat center right 20%";
      email.value = "";
   }
});
