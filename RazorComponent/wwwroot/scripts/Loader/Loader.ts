﻿namespace App {
    //primer caso
    //NvFile.GetStringAsync("../Loader/CargarPagina?id=anita").then((data) => {
    //    console.log(data);
    //    $("#AddHtml").html(data);
    //})

    //NvFile.PostStringAsync("../Loader/CargarPagina", {id:"Andrey"}).then((data) => {
    //    console.log(data);
    //    $("#AddHtml").html(data);
    //})

    //var { data} = NvFile.GetString("../Loader/CargarPagina?id=anita");

    //console.log(data);

    //$("#AddHtml").html(data);

    //var { data } = NvFile.PostString("../Loader/CargarPagina", { id: "Andrey" });

    //console.log(data);

    //$("#AddHtml").html(data);

    NvFile.PostArrayBufferAsync("../Loader/CargarPagina", { id: "Andrey" }).then(data => {
        console.log(data);
       
    });

  

    //$("#AddHtml").html(data);

    $(document).ready(function () {
        
      
    });




}