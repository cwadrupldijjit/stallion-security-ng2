System.register(['angular2/platform/browser', './app.component', 'angular2/router', 'angular2/router/router_link_dsl'], function(exports_1) {
    var browser_1, app_component_1, router_1, router_link_dsl_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (router_link_dsl_1_1) {
                router_link_dsl_1 = router_link_dsl_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS, router_link_dsl_1.ROUTER_LINK_DSL_PROVIDER]);
        }
    }
});
//# sourceMappingURL=boot.js.map