// utils.js — Provides helper functions like UUID generation and toast notifications.

window.Utils = {
    uuid() {
        return crypto.randomUUID();
    },

  showToast(msg) {
    const toast = document.getElementById("toast");

    toast.removeAttribute("hidden");

    toast.textContent = msg;
    toast.classList.add("show");

    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2200);
}
};
