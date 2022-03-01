"use strict";
var App;
(function (App) {
    var VueLoad;
    (function (VueLoad) {
        function TemplateAsync(URL) {
            return App.NvFile.GetStringAsync(URL).then(function (data) {
                return {
                    Template: VueClassComponent.createDecorator(function (opt, key) {
                        var renderFn = VueTemplateCompiler.compileToFunctions(data);
                        opt.render = renderFn.render;
                        opt.staticRenderFns = renderFn.staticRenderFns;
                    }),
                    TemplateExtended: Vue.extend({ template: data })
                };
            }).catch(function (r) {
                console.log(r);
                return {
                    Template: VueClassComponent.createDecorator(function (op, key) { }),
                    TemplateExtended: Vue.extend({ template: null })
                };
            });
        }
        VueLoad.TemplateAsync = TemplateAsync;
        function Template(URL) {
            var _a = App.NvFile.GetString(URL), data = _a.data, status = _a.status;
            if (status) {
                return {
                    Template: VueClassComponent.createDecorator(function (opt, key) {
                        var renderFn = VueTemplateCompiler.compileToFunctions(data);
                        opt.render = renderFn.render;
                        opt.staticRenderFns = renderFn.staticRenderFns;
                    }),
                    TemplateExtended: Vue.extend({ template: data })
                };
            }
            else {
                console.log(data);
                return {
                    Template: VueClassComponent.createDecorator(function (op, key) { }),
                    TemplateExtended: Vue.extend({ template: null })
                };
            }
        }
        VueLoad.Template = Template;
    })(VueLoad = App.VueLoad || (App.VueLoad = {}));
})(App || (App = {}));
//# sourceMappingURL=VueLoad.js.map