import {Component, OnInit} from "@angular/core";
import { ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { IntProduct } from './product-int';
import { ProductService } from './product.service';
import construct = Reflect.construct;

@Component({
    selector:'ap-app',
    templateUrl:'app/product/product-confirm.component.html'
})
export class ProductConfirmComponent implements OnInit{
    pageTitle:string ='Confirmation Page';
    product: IntProduct;
    private sub: Subscription;
    errorMessage: string;

    // setting decencies
    constructor(private _route: ActivatedRoute,
                private _productService: ProductService){

    }
    ngOnInit():void{
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getProduct(id);
            });
    }
    //getting product id snapshot to the next page
    getProduct(id: number){
        this._productService.getProduct(id).subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error);
    }
}



