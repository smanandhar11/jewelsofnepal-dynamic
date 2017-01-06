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
var core_1 = require("@angular/core");
var router_1 = require('@angular/router');
var product_service_1 = require('./product.service');
var ProductConfirmComponent = (function () {
    // setting decencies
    function ProductConfirmComponent(_route, _productService) {
        this._route = _route;
        this._productService = _productService;
        this.pageTitle = 'Confirmation Page';
    }
    ProductConfirmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.getProduct(id);
        });
    };
    //getting product id snapshot to the next page
    ProductConfirmComponent.prototype.getProduct = function (id) {
        var _this = this;
        this._productService.getProduct(id).subscribe(function (product) { return _this.product = product; }, function (error) { return _this.errorMessage = error; });
    };
    ProductConfirmComponent = __decorate([
        core_1.Component({
            selector: 'ap-app',
            templateUrl: 'app/product/product-confirm.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, product_service_1.ProductService])
    ], ProductConfirmComponent);
    return ProductConfirmComponent;
}());
exports.ProductConfirmComponent = ProductConfirmComponent;
//# sourceMappingURL=product-confirm.component.js.map