namespace App.NvFile {

    export function GetStringAsync(URL:string) {


        return new Promise<string>((Resolve, reject) => {
            try {
                var res = new XMLHttpRequest();
                res.open("GET", URL, true);
                res.responseType = "text";
                res.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
                res.setRequestHeader("Cache-Control", "no-cache,no-store");

                res.onload = () => {
                    if (res.status == 200) {
                        Resolve(res.response)
                    } else {
                        reject(res.statusText);
                    }
                }
                res.send();
            } catch (e) {
                reject(e);
            }

        });
    }

    export function PostStringAsync<T>(URL: string,data:T) {


        return new Promise<string>((Resolve, reject) => {
            try {
                var res = new XMLHttpRequest();
                res.open("POST", URL, true);
                res.responseType = "text";
                res.setRequestHeader("Content-Type", "application/json");
                res.setRequestHeader("Cache-Control", "no-cache,no-store");

                res.onload = () => {
                    if (res.status == 200) {
                        Resolve(res.response)
                    } else {
                        reject(res.statusText);
                    }
                }
                res.send(JSON.stringify(data));
            } catch (e) {
                reject(e);
            }

        });
    }

    export function PostString<T>(URL: string, data:T): { data: string, status: boolean } {
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
            } else {
                return {
                    data: res.statusText,
                    status: false
                };
            }
        } catch (e) {
            return {
                data: e as string,
                status: false
            };
        }

    }

    export function GetString(URL: string): {data:string ,status:boolean} {
        try {
            var res = new XMLHttpRequest();
            res.open("GET", URL, false);
            
            res.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
            res.setRequestHeader("Cache-Control", "no-cache,no-store");
            res.send();
            if (res.status == 200) {
                return {
                    data: res.response,
                    status:true
                };
            } else {
                return {
                    data: res.statusText,
                    status: false
                };
            }
        } catch (e) {
            return {
                data: e as string,
                status: false
            };
        }

    }

    export function GetBlobAsync(URL: string) {


        return new Promise<Blob>((Resolve, reject) => {
            try {
                var res = new XMLHttpRequest();
                res.open("GET", URL, true);
                res.responseType = "blob";

                res.onload = () => {
                    if (res.status == 200) {
                        
                        Resolve(res.response);

                    } else {
                        reject(res.statusText);
                    }
                }
                res.send();
            } catch (e) {
                reject(e);
            }

        });
    }

    export function PostBlobAsync<T>(URL: string, data: T) {


        return new Promise<Blob>((Resolve, reject) => {
            try {
                var res = new XMLHttpRequest();
                res.open("POST", URL, true);
                res.responseType = "blob";
                res.setRequestHeader("Content-Type", "application/json");
                res.onload = () => {
                    if (res.status == 200) {
                        Resolve(res.response);

                    } else {
                        reject(res.statusText);
                    }
                }
                res.send(JSON.stringify(data));
            } catch (e) {
                reject(e);
            }

        });
    }

    export function GetArrayBufferAsync(URL: string) {


        return new Promise<ArrayBuffer>((Resolve, reject) => {
            try {
                var res = new XMLHttpRequest();
                res.open("GET", URL, true);
                res.responseType = "arraybuffer";

                res.onload = () => {
                    if (res.status == 200) {

                        Resolve(res.response);

                    } else {
                        reject(res.statusText);
                    }
                }
                res.send();
            } catch (e) {
                reject(e);
            }

        });
    }

    export function PostArrayBufferAsync<T>(URL: string, data: T) {


        return new Promise<ArrayBuffer>((Resolve, reject) => {
            try {
                var res = new XMLHttpRequest();
                res.open("POST", URL, true);
                res.responseType = "arraybuffer";
                res.setRequestHeader("Content-Type", "application/json");
                res.onload = () => {
                    if (res.status == 200) {
                        Resolve(res.response);

                    } else {
                        reject(res.statusText);
                    }
                }
                res.send(JSON.stringify(data));
            } catch (e) {
                reject(e);
            }

        });
    }


}