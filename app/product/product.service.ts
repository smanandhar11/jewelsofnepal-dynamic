//Creating Service
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Rx";
import {IntProduct} from "./product-int";

@Injectable()
export class ProductService{

    //providing webservice src
    private _productUrl = 'api/products/products.json';

    //injecting http service
    constructor (private _http: Http){}

    //using get method to obtain data and transform it
    getProducts(): Observable<IntProduct[]>{
        return this._http.get(this._productUrl)
        //transforming data in json
            .map((response: Response) => <IntProduct[]> response.json())
            //displaying dat in console
            .do(data => console.log('All:'+ JSON.stringify(data)))
            //calling error handler if needed
            .catch(this.handleError);
    }
    getProduct(id:number):Observable<IntProduct> {
        return this.getProducts()
            .map((products: IntProduct[]) => products.find(p => p.productId === id));
    }

    //error handler Fn
    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}


