const DEFAULT_STATE = {
  loginPhone: true,
  securePhone: true,
  secureEmail: true,
};

let currentState = { ...DEFAULT_STATE };
let savedState = { ...DEFAULT_STATE };
let toastTimer = null;

const saveButton = document.querySelector("#saveButton");
const toast = document.querySelector("#toast");
const switches = [...document.querySelectorAll("[data-switch]")];

function renderSwitches() {
  switches.forEach((switchButton) => {
    const key = switchButton.dataset.switch;
    const isOn = currentState[key];
    switchButton.classList.toggle("is-on", isOn);
    switchButton.setAttribute("aria-pressed", String(isOn));
  });
}

function isDirty() {
  return Object.keys(DEFAULT_STATE).some((key) => currentState[key] !== savedState[key]);
}

function renderDirtyState() {
  saveButton.classList.toggle("is-dirty", isDirty());
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 1800);
}

switches.forEach((switchButton) => {
  switchButton.addEventListener("click", () => {
    const key = switchButton.dataset.switch;
    currentState[key] = !currentState[key];
    renderSwitches();
    renderDirtyState();
  });
});

saveButton.addEventListener("click", () => {
  saveButton.classList.add("is-loading");
  saveButton.textContent = "保存中";
  window.setTimeout(() => {
    saveButton.classList.remove("is-loading");
    saveButton.classList.remove("is-dirty");
    saveButton.textContent = "保存";
    savedState = { ...currentState };
    showToast("保存成功");
  }, 520);
});

renderSwitches();
