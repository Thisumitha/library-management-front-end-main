import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginComponent } from '../../pages/login/login.component';
import { ViewAllBooksComponent } from '../../pages/view-all-books/view-all-books.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
