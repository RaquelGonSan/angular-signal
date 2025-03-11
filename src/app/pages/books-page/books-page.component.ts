import { Component, computed, signal } from '@angular/core';
import { NavMenuComponent } from '../../components/nav-menu/nav-menu.component';
import { RouterModule } from '@angular/router';
import { Book } from '../../interfaces/book';
import LandingPageComponent from "../landing-page/landing-page.component";

type Filter = 'all' | 'pending' | 'completed'

@Component({
  selector: 'app-books',
  imports: [ RouterModule],
  templateUrl: './books-page.component.html',
})
export default class BooksPageComponent {

  public books = signal<Book[]>(
    [
      {
        id: 1,
        title: '100 años de Soledad',
        autor: 'Gabrir Garcia Marquez',
        completed: true
      },
      {
        id: 2,
        title: 'Kafka en la Orilla',
        autor: 'Haruki Murakami',
        completed: true
      },
      {
        id: 3,
        title: 'El zoo de papel',
        autor: 'Ken Liu',
        completed: true
      }
      ,
      {
        id: 4,
        title: 'El abanico de Seda',
        autor: 'Lisa See',
        completed: false
      }
    ]
  )

  filter = signal<Filter>('all');

  currentBooks = computed(() => {
    switch (this.filter()) {
      case 'pending':
        return this.books().filter(book => !book.completed)
      case 'completed':
        return this.books().filter(book => book.completed)
      default:
        return this.books()
    }
  })


  changeFilter(filter: Filter){
    this.filter.set(filter)
  }




}
