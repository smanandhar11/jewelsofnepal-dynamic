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
var product_service_1 = require('./product.service');
var ProductMenuComponent = (function () {
    //injecting dependency
    function ProductMenuComponent(_productService) {
        this._productService = _productService;
        this.pageTitle = 'Product List';
        this.imageWidth = 180;
        this.imageHeight = 230;
        //Select Filter List- color
        this.colorTypes = [
            { id: 0, name: "Red" },
            { id: 1, name: "Black" },
            { id: 2, name: "Green" },
            { id: 3, name: "Gold" }
        ];
        //Select Filter List- type
        this.catgTypes = [
            { id: 0, name: "Earring" },
            { id: 1, name: "Finger-Ring" },
            { id: 2, name: "Necklace" },
            { id: 3, name: "Set" }
        ];
    }
    //get product from the data service
    ProductMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._productService.getProducts()
            .subscribe(function (products) { return _this.products = products; }, function (error) { return _this.errorMessage = error; });
    };
    ProductMenuComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/product/product-menu.component.html',
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService])
    ], ProductMenuComponent);
    return ProductMenuComponent;
}());
exports.ProductMenuComponent = ProductMenuComponent;
//# sourceMappingURL=product-menu.component.js.map