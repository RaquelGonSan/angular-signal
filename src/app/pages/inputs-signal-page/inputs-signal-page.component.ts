import { ChangeDetectionStrategy, Component, inject, Input, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from '../../components/child/child.component';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../interfaces/product';
import { ProductsService } from '../../services/products.service';
import { last } from 'rxjs';

@Component({
  selector: 'app-inputs-signal-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ChildComponent, ProductComponent],
  templateUrl: './inputs-signal-page.component.html',
})
export default class InputsSignalPageComponent implements OnInit{


public firstName = signal('');
public lastName = signal('');
public age = signal(0);
public products = signal<Product[]>([]);

private productsService = inject(ProductsService);



ngOnInit(): void {
  this.productsService.getAllProducts().subscribe((products) =>{
   // this.products = products 
   this.products.set(products);
    console.log(this.products);
  });
}


addProduct():void{
 /* this.products.push({
    id: 6, name: 'Product 6' 
  })*/
 const lastId = this.products().length;
 const newProduct = {
  id: lastId + 1,
  name: `Product ${lastId + 1}`
 }
 this.products.update((products) => [...products, newProduct]);

}
    





}
