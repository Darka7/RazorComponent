namespace App.VueLoad {
    export function TemplateAsync(URL: string) {
        return NvFile.GetStringAsync(URL).then(data => {

            return VueClassComponent.createDecorator(async (opt, key) => {
                var renderFn = VueTemplateCompiler.compileToFunctions(data);
                opt.render = renderFn.render;
                opt.staticRenderFns = renderFn.staticRenderFns;
            });

        }).catch(r => {
            console.log(r);
            return VueClassComponent.createDecorator(async (opt, key) => { });
        });
    }



    export function Template(URL: string) {
        return VueClassComponent.createDecorator((opt, key) => {
            var { data, status } = NvFile.GetString(URL);
            if (status) {
                var renderFn = VueTemplateCompiler.compileToFunctions(data);
                opt.render = renderFn.render;
                opt.staticRenderFns = renderFn.staticRenderFns;
            }
        });
    }



    export const WatchRender = VueClassComponent.createDecorator((options, key,index) => {
        
        var HtmlMethod = options.methods["RenderHtml"].call(null);
        
        var renderFn = VueTemplateCompiler.compileToFunctions(HtmlMethod);
        options.render = renderFn.render;
        options.staticRenderFns = renderFn.staticRenderFns;
    });
    

    export const WithRender =(Template:string)=> VueClassComponent.createDecorator((options, key, index) => {
        var renderFn = VueTemplateCompiler.compileToFunctions(Template);
        options.render = renderFn.render;
        options.staticRenderFns = renderFn.staticRenderFns;
    });
}