import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Alan';
  textPlaceholder = 'Escribe algo aqui...';
  disabledInput = true;
  imgSource = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png';
  textEventBinding = 'Esto es un texto de prueba';
  textTwoWayBinding = '';

  changeText(): void {
    this.textEventBinding = 'El texto ha cambiado';
  }

  constructor() {
    setInterval(() => this.disabledInput = false, 3000)
  }

  getSum(a: number, b: number) {
    return a + b;
  }
}
