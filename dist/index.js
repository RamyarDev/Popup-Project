"use strict";
var _a;
const alertBox = document.getElementById("alertBox");
const btn = document.getElementById("btn");
function showAlert() {
    alertBox === null || alertBox === void 0 ? void 0 : alertBox.classList.remove("scale-0", "-translate-y-60");
    alertBox === null || alertBox === void 0 ? void 0 : alertBox.classList.add("scale-100", "translate-y-0");
}
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
    alertBox === null || alertBox === void 0 ? void 0 : alertBox.classList.add("scale-0", "-translate-y-60");
    alertBox === null || alertBox === void 0 ? void 0 : alertBox.classList.remove("scale-100", "translate-y-0");
});
(_a = document.body) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    alertBox === null || alertBox === void 0 ? void 0 : alertBox.classList.add("scale-0", "-translate-y-60");
    alertBox === null || alertBox === void 0 ? void 0 : alertBox.classList.remove("scale-100", "translate-y-0");
});
showAlert();
