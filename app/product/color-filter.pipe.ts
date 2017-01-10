import { Pipe, PipeTransform} from '@angular/core';
import { IntProduct } from './product-int';
@Pipe({
    name:'colorFilter'
})
export class ColorFilterPipe implements PipeTransform{
    transform(value: IntProduct[], colorfilterInput: string): IntProduct[]{
        colorfilterInput = colorfilterInput ? colorfilterInput.toLocaleLowerCase() : null;
        return colorfilterInput ? value.filter((product: IntProduct) =>
        product.color.toLocaleLowerCase().indexOf(colorfilterInput)!== -1): value;

    }

}

