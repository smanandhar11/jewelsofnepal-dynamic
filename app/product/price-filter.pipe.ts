import { Pipe, PipeTransform} from '@angular/core';
import { IntProduct } from './product-int';
@Pipe({
    name:'priceFilter'
})
export class PriceFilterPipe implements PipeTransform{
    transform(value: IntProduct[], pricefilterInput: string): IntProduct[]{
        pricefilterInput = pricefilterInput ? pricefilterInput.toLocaleLowerCase() : null;
        if( pricefilterInput ="Less than Rx.100"){
            alert('hello');
        }
        return value;

    }

}