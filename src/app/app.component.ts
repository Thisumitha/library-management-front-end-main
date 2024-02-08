import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './common/nav/nav.component';
import { ViewAllBooksComponent } from "./pages/view-all-books/view-all-books.component";
import { LoginComponent } from './pages/login/login.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet,NavComponent]
})
export class AppComponent {
  title = 'library-management-front-end-main';
}
