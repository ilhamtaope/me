const nama = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const submit = document.getElementById("submit");

submit.addEventListener("click", function (e) {
  e.preventDefault;
  const nameValue = nama.value;
  const emailValue = email.value;
  const messageValue = message.value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nameValue === "" || messageValue === "" || emailValue === "") {
    alert(
      "Please double-check your input to ensure it is not empty, and make sure your email is valid. Thank you."
    );
  } else if (!emailPattern.test(emailValue)) {
    alert("Please enter a valid email address.");
  } else {
    alert("Success! Your response has been successfully received.");
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const text = "Muhammad Ilham";
  const target = document.getElementById("typed-name");
  let i = 0;

  function type() {
    if (i < text.length) {
      target.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 100);
    } else {
      setTimeout(() => {
        target.innerHTML = "";
        i = 0;
        type();
      }, 1200);
    }
  }

  type();
});
