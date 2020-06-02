document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.getElementById("name");
  const greetHeading = document.getElementById("greet");
  console.log(nameInput);

  nameInput.addEventListener("keyup", (e) => {
    console.log(e);
    greetHeading.innerHTML = `Hello ${nameInput.value}`;
  });
});
