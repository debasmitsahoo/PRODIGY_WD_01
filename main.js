const navigation = document.querySelector(".navigation");
const logo = document.querySelector(".logo");

logo.addEventListener("click", () => {
  navigation.classList.add("show");
});

function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}
