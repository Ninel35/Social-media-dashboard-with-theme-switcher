let darkmode = localStorage.getItem("darkmode");
const toggleswitch = document.getElementById("btn-toggle");

const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
  toggleswitch.checked = false;
};

const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
  toggleswitch.checked = true;
};
if (localStorage.getItem("darkmode") === "active") {
  enableDarkmode();
} else {
  disableDarkmode();
}

toggleswitch.addEventListener("change", () => {
  toggleswitch.checked ? disableDarkmode() : enableDarkmode();
});