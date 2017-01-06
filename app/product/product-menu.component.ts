import { Component, OnInit } from '@angular/core';
import { IntProduct } from './product-int'
import { ProductService } from './product.service';

@Component({
    templateUrl :'app/product/product-menu.component.html',
})

export class ProductMenuComponent implements OnInit{
    pageTitle :string = 'Product List';
    imageWidth:number = 180;
    imageHeight: number = 230;
    errorMessage: string;
    products :IntProduct[];
    listFilter: string;
    listFiltertwo: string;


    //injecting dependency
    constructor(private _productService: ProductService){

    }
    //get product from the data service
    ngOnInit():void {
        this._productService.getProducts()
            .subscribe(products => this.products = products,
                        error => this.errorMessage = <any>error);
    }
    //Select Filter List- color
    colorTypes = [
        {id: 0, name: "Red"},
        {id: 1, name: "Black"},
        {id: 2, name: "Green"},
        {id: 3, name: "Gold"}
    ];
    //Select Filter List- type
    catgTypes = [
        {id: 0, name: "Earring"},
        {id: 1, name: "Finger-Ring"},
        {id: 2, name: "Necklace"},
        {id: 3, name:"Set"}
    ]

    


}