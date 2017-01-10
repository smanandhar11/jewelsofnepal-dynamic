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
var TypeFilterPipe = (function () {
    function TypeFilterPipe() {
    }
    TypeFilterPipe.prototype.transform = function (value, typefilterInput) {
        typefilterInput = typefilterInput ? typefilterInput.toLocaleLowerCase() : null;
        return typefilterInput ? value.filter(function (product) {
            return product.category.toLocaleLowerCase().indexOf(typefilterInput) !== -1;
        }) : value;
    };
    return TypeFilterPipe;
}());
TypeFilterPipe = __decorate([
    core_1.Pipe({
        name: 'typeFilter'
    }),
    __metadata("design:paramtypes", [])
], TypeFilterPipe);
exports.TypeFilterPipe = TypeFilterPipe;
//# sourceMappingURL=type-filter.pipe.js.map