import { ChangeDetectionStrategy, Component, input, Input } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product.component.html',
})
export class ProductComponent {

 // @Input() product!: Product
 product = input.required<Product>()

}
