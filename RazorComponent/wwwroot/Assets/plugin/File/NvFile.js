"use strict";
var App;
(function (App) {
    var NvFile;
    (function (NvFile) {
        function GetStringAsync(URL) {
            return new Promise(function (Resolve, reject) {
                try {
                    var res = new XMLHttpRequest();
                    res.open("GET", URL, true);
                    res.responseType = "text";
                    res.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
                    res.setRequestHeader("Cache-Control", "no-cache,no-store");
                    res.onload = function () {
                        if (res.status == 200) {
                            Resolve(res.response);
                        }
                        else {
                            reject(res.statusText);
                        }
                    };
                    res.send();
                }
                catch (e) {
                    reject(e);
                }
            });
        }
        NvFile.GetStringAsync = GetStringAsync;
        function PostStringAsync(URL, data) {
            return new Promise(function (Resolve, reject) {
                try {
                    var res = new XMLHttpRequest();
                    res.open("POST", URL, true);
                    res.responseType = "text";
                    res.setRequestHeader("Content-Type", "application/json");
                    res.setRequestHeader("Cache-Control", "no-cache,no-store");
                    res.onload = function () {
                        if (res.status == 200) {
                            Resolve(res.response);
                        }
                        else {
                            reject(res.statusText);
                        }
                    };
                    res.send(JSON.stringify(data));
                }
                catch (e) {
                    reject(e);
                }
            });
        }
        NvFile.PostStringAsync = PostStringAsync;
        function PostString(URL, data) {
            try {
                var res = new XMLHttpRequest();
                res.open("POST", URL, false);
                res.setRequestHeader("Content-Type", "application/json");
                res.setRequestHeader("Cache-Control", "no-cache,no-store");
                res.send(JSON.stringify(data));
                if (res.status == 200) {
                    return {
                        data: res.response,
                        status: true
                    };
                }
                else {
                    return {
                        data: res.statusText,
                        status: false
                    };
                }
            }
            catch (e) {
                return {
                    data: e,
                    status: false
                };
            }
        }
        NvFile.PostString = PostString;
        function GetString(URL) {
            try {
                var res = new XMLHttpRequest();
                res.open("GET", URL, false);
                res.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
                res.setRequestHeader("Cache-Control", "no-cache,no-store");
                res.send();
                if (res.status == 200) {
                    return {
                        data: res.response,
                        status: true
                    };
                }
                else {
                    return {
                        data: res.statusText,
                        status: false
                    };
                }
            }
            catch (e) {
                return {
                    data: e,
                    status: false
                };
            }
        }
        NvFile.GetString = GetString;
        function GetBlobAsync(URL) {
            return new Promise(function (Resolve, reject) {
                try {
                    var res = new XMLHttpRequest();
                    res.open("GET", URL, true);
                    res.responseType = "blob";
                    res.onload = function () {
                        if (res.status == 200) {
                            Resolve(res.response);
                        }
                        else {
                            reject(res.statusText);
                        }
                    };
                    res.send();
                }
                catch (e) {
                    reject(e);
                }
            });
        }
        NvFile.GetBlobAsync = GetBlobAsync;
        function PostBlobAsync(URL, data) {
            return new Promise(function (Resolve, reject) {
                try {
                    var res = new XMLHttpRequest();
                    res.open("POST", URL, true);
                    res.responseType = "blob";
                    res.setRequestHeader("Content-Type", "application/json");
                    res.onload = function () {
                        if (res.status == 200) {
                            Resolve(res.response);
                        }
                        else {
                            reject(res.statusText);
                        }
                    };
                    res.send(JSON.stringify(data));
                }
                catch (e) {
                    reject(e);
                }
            });
        }
        NvFile.PostBlobAsync = PostBlobAsync;
        function GetArrayBufferAsync(URL) {
            return new Promise(function (Resolve, reject) {
                try {
                    var res = new XMLHttpRequest();
                    res.open("GET", URL, true);
                    res.responseType = "arraybuffer";
                    res.onload = function () {
                        if (res.status == 200) {
                            Resolve(res.response);
                        }
                        else {
                            reject(res.statusText);
                        }
                    };
                    res.send();
                }
                catch (e) {
                    reject(e);
                }
            });
        }
        NvFile.GetArrayBufferAsync = GetArrayBufferAsync;
        function PostArrayBufferAsync(URL, data) {
            return new Promise(function (Resolve, reject) {
                try {
                    var res = new XMLHttpRequest();
                    res.open("POST", URL, true);
                    res.responseType = "arraybuffer";
                    res.setRequestHeader("Content-Type", "application/json");
                    res.onload = function () {
                        if (res.status == 200) {
                            Resolve(res.response);
                        }
                        else {
                            reject(res.statusText);
                        }
                    };
                    res.send(JSON.stringify(data));
                }
                catch (e) {
                    reject(e);
                }
            });
        }
        NvFile.PostArrayBufferAsync = PostArrayBufferAsync;
    })(NvFile = App.NvFile || (App.NvFile = {}));
})(App || (App = {}));
//# sourceMappingURL=NvFile.js.map