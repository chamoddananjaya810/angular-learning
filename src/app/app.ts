import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Products } from './components/products/products';
import { Login } from './components/login/login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet
    ,Products,
    Login,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first hello');
}
