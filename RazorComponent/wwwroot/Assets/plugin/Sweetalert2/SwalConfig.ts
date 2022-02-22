namespace App {

  export  var Loading = Swal.mixin({


        didOpen: function (toast) {
            Loading.showLoading();
        },
        toast: true,
        backdrop: "rgba(1,1,1,0.7)",
        customClass: {
            confirmButton: "hdbtnCustom",
            popup: "swalCustomPopup",
            container: " swalCustomBackdrop"

        },

    });



   export var Toast = Swal.mixin({
        toast: true,
        width: "auto",
        position: 'bottom-start',
        showConfirmButton: false,

        timer: 6000,
        timerProgressBar: true,
        didOpen: function (toast) {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
       },
       customClass: {
           popup:"swalCustomPopupToasts"
       }
    });

  



    var ComfirmAlert = function (Mensaje: string, confirmButtonText: string, Icon: "success" | "error" | "warning", confirmButtonColor: string | '#3085d6', cancelButtonColor: string | "#d33") {

        return Swal.fire({
            title: Mensaje,
            icon: Icon,
            showCancelButton: true,
            confirmButtonColor: confirmButtonColor,
            cancelButtonColor: cancelButtonColor,
            confirmButtonText: confirmButtonText
        });

    }

}