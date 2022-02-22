"use strict";
var App;
(function (App) {
    App.Loading = Swal.mixin({
        didOpen: function (toast) {
            App.Loading.showLoading();
        },
        toast: true,
        backdrop: "rgba(1,1,1,0.7)",
        customClass: {
            confirmButton: "hdbtnCustom",
            popup: "swalCustomPopup",
            container: " swalCustomBackdrop"
        },
    });
    App.Toast = Swal.mixin({
        toast: true,
        width: "auto",
        position: 'bottom-start',
        showConfirmButton: false,
        timer: 6000,
        timerProgressBar: true,
        didOpen: function (toast) {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
        customClass: {
            popup: "swalCustomPopupToasts"
        }
    });
    var ComfirmAlert = function (Mensaje, confirmButtonText, Icon, confirmButtonColor, cancelButtonColor) {
        return Swal.fire({
            title: Mensaje,
            icon: Icon,
            showCancelButton: true,
            confirmButtonColor: confirmButtonColor,
            cancelButtonColor: cancelButtonColor,
            confirmButtonText: confirmButtonText
        });
    };
})(App || (App = {}));
//# sourceMappingURL=SwalConfig.js.map