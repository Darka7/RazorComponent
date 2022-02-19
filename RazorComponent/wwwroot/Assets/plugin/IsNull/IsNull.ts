namespace App {

    export var isNullOrEmpty = function (value) { return (!value || value == undefined || value == "" || value.length == 0 || value == null); }
    export var IsNull = function (value) { return (value == undefined || value === "" || value.length == 0 || value == null); }


}