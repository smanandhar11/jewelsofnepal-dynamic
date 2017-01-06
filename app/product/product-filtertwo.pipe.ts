import { Pipe, PipeTransform} from '@angular/core';
import { IntProduct } from './product-int';
@Pipe({
    name:'selectFiltertwo'
})
export class ProductFilterTwoPipe implements PipeTransform{
    transform(value: IntProduct[], listFiltertwo: string): IntProduct[]{
        listFiltertwo = listFiltertwo ? listFiltertwo.toLocaleLowerCase() : null;
        return listFiltertwo ? value.filter((product: IntProduct) =>
        product.category.toLocaleLowerCase().indexOf(listFiltertwo)!== -1): value;

    }

}