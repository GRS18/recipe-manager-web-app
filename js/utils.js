window.Utils = {
    uuid() {
        return crypto.randomUUID();
    },

  showToast(msg) {
    const toast = document.getElementById("toast");

    // remove hidden attribute if present
    toast.removeAttribute("hidden");

    toast.textContent = msg;
    toast.classList.add("show");

    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2200);
}
};
