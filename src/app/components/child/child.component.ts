import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-child',
  imports: [FormsModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './child.component.html',
})
export class ChildComponent {
/*
  @Input() firstname!: string ;
  @Input() lastname!: string ;
  @Input() age!: number;
  @Input() products!: string[] ;

*/

 public firstname = input.required<string>();
 public lastname = input.required<string>();
 public age = input.required<number>();
 public doubleage = computed(() => this.age() * 2);
 public products = input.required<Product[]>();

constructor() { 
  //la manera de leer cambios con signals mas eficiente y con mejor rendimiento
  effect(() => {
    const name = this.firstname();
    this.logicChangeName(name);
  })
  effect(() => {
    const age = this.age();
    this.logicChangeAge(age);
  }) 
}

 
 /*ngOnChanges(changes: SimpleChanges): void {
  if( changes['firstname'] ){
    console.log(changes['firstname'].currentValue);
  }
  if(changes['age']){
    console.log(changes['age'].currentValue);
  }
}*/

logicChangeName(name: string): void {
  console.log('cambios en name = ', name);
}

logicChangeAge(age: number): void {
  console.log('cambios en age = ', age);
  this.doubleage = this.doubleage;

}





}
