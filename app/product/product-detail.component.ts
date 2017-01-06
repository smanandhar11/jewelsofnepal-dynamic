import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ProductService } from './product.service'
import {IntProduct} from "./product-int";

@Component({
    selector:'pdt-app',
    templateUrl:'app/product/product-detail.component.html'    
})
export class ProductDetailComponent implements OnInit, OnDestroy{
    pageTitle:string = 'ProductDetailComponent';
    product: IntProduct;
    errorMessage: string;
    private sub: Subscription;

    // setting decencies
    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _productService: ProductService){

    }
    //using lifecycle hook to get snapshot of id
    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getProduct(id);
            });

    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    getProduct(id: number) {
        this._productService.getProduct(id).subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error);
    }

    //routing back to products page
    onBack(): void{
        this._router.navigate(['/products']);
    }
}
