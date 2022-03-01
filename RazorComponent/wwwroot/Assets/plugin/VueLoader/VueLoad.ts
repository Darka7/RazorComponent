namespace App.VueLoad {



    export function TemplateAsync(URL:string) {

        return NvFile.GetStringAsync(URL).then((data) => {

            return {
                Template: VueClassComponent.createDecorator((opt, key) => {

                    var renderFn = VueTemplateCompiler.compileToFunctions(data);
                    opt.render = renderFn.render;
                    opt.staticRenderFns = renderFn.staticRenderFns;

                }),
                TemplateExtended: Vue.extend<{}, {}, {}, {}>({ template: data })
            };

        }).catch(r => {
            console.log(r);

            return {
                Template: VueClassComponent.createDecorator((op, key) => { }),
                TemplateExtended: Vue.extend<{}, {}, {}, {}>({ template:null})

            };
        });

    }

    export function Template(URL: string) {

        var {data,status }= NvFile.GetString(URL);
        if (status) {
            return {
                Template: VueClassComponent.createDecorator((opt, key) => {

                    var renderFn = VueTemplateCompiler.compileToFunctions(data);
                    opt.render = renderFn.render;
                    opt.staticRenderFns = renderFn.staticRenderFns;

                }),
                TemplateExtended: Vue.extend<{}, {}, {}, {}>({ template: data })
            };
        } else {
            console.log(data);

            return {
                Template: VueClassComponent.createDecorator((op, key) => { }),
                TemplateExtended: Vue.extend<{}, {}, {}, {}>({ template: null })

            };
        }
    }






}