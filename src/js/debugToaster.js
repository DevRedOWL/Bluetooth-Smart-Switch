// Debug function
export default function debugToast($f7, ...messages) {
    // Create toast
    let toastTop = $f7.toast.create({
        text: messages,
        // icon: '<i class="f7-icons">star_fill</i>',
        position: 'top',
        closeTimeout: 2000,
        on: {
            close: function () {
                toastTop.destroy();
            },
        }
    });
    // Open it and log message
    toastTop.open();
    return messages;
}
window.console.toast = debugToast;