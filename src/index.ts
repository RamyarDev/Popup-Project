const alertBox = document.getElementById("alertBox");
const btn = document.getElementById("btn");

function showAlert() {
  alertBox?.classList.remove("scale-0", "-translate-y-60");
  alertBox?.classList.add("scale-100", "translate-y-0");
}

btn?.addEventListener("click", () => {
  alertBox?.classList.add("scale-0", "-translate-y-60");
  alertBox?.classList.remove("scale-100", "translate-y-0");
});
document.body?.addEventListener("click", () => {
  alertBox?.classList.add("scale-0", "-translate-y-60");
  alertBox?.classList.remove("scale-100", "translate-y-0");
});

showAlert();
