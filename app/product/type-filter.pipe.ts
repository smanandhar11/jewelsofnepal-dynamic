import { Pipe, PipeTransform} from '@angular/core';
import { IntProduct } from './product-int';
@Pipe({
    name:'typeFilter'
})
export class TypeFilterPipe implements PipeTransform{
    transform(value: IntProduct[], typefilterInput: string): IntProduct[]{
        typefilterInput = typefilterInput ? typefilterInput.toLocaleLowerCase() : null;
        return typefilterInput ? value.filter((product: IntProduct) =>
        product.category.toLocaleLowerCase().indexOf(typefilterInput)!== -1): value;

    }

}