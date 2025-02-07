import { Component } from '@angular/core';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrl: './fruit-list.component.css'
})
export class FruitListComponent {
  fruits: { id: number; name: string; price: number; quantity: number }[] = [];
  
  // Properties for new Employee
  id: number = 0;
  name: string = '';
  price: number = 0;
  quantity: number = 0;

  addFruits() {
    const newFruits = { id: this.id, name: this.name, price: this.price, quantity: this.quantity };
    this.fruits.push(newFruits);
}
}
