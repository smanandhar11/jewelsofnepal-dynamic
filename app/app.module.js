"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
//import { ProductService } from './product/product.service';
var product_guard_service_1 = require('./product/product-guard.service');
var product_menu_component_1 = require('./product/product-menu.component');
var product_detail_component_1 = require('./product/product-detail.component');
var welcome_component_1 = require('./home/welcome.component');
var product_confirm_component_1 = require("./product/product-confirm.component");
var product_filter_pipe_1 = require('./product/product-filter.pipe');
var product_filtertwo_pipe_1 = require('./product/product-filtertwo.pipe');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    { path: 'products', component: product_menu_component_1.ProductMenuComponent },
                    { path: 'products/:id/confirm', component: product_confirm_component_1.ProductConfirmComponent },
                    { path: 'products/:id', canActivate: [product_guard_service_1.ProductDetailGuard], component: product_detail_component_1.ProductDetailComponent },
                    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                product_menu_component_1.ProductMenuComponent,
                product_detail_component_1.ProductDetailComponent,
                welcome_component_1.WelcomeComponent,
                product_confirm_component_1.ProductConfirmComponent,
                product_filter_pipe_1.ProductFilterPipe,
                product_filtertwo_pipe_1.ProductFilterTwoPipe
            ],
            providers: [product_guard_service_1.ProductDetailGuard],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map