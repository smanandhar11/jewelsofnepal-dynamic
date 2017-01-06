import { Pipe, PipeTransform} from '@angular/core';
import { IntProduct } from './product-int';
@Pipe({
    name:'selectFilter'
})
export class ProductFilterPipe implements PipeTransform{
    transform(value: IntProduct[], listFilter: string): IntProduct[]{
        listFilter = listFilter ? listFilter.toLocaleLowerCase() : null;
        return listFilter ? value.filter((product: IntProduct) =>
        product.color.toLocaleLowerCase().indexOf(listFilter)!== -1): value;

    }

}

