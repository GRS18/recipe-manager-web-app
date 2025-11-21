window.Utils = {
    uuid() {
        return crypto.randomUUID();
    },

    showToast(msg) {
        const toast = document.getElementById("toast");
        toast.textContent = msg;
        toast.hidden = false;
        setTimeout(() => (toast.hidden = true), 1800);
    }
};
