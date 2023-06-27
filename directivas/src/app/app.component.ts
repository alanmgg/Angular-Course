import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listStudents: any[] = [
    { name: 'Tomas Gonzalez', state: 'Promocionado' },
    { name: 'Juan Garcia', state: 'Regular' },
    { name: 'Patricia Funes', state: 'Libre' },
    { name: 'Lucas Perez', state: 'Regular' },
    { name: 'Marta Perez', state: 'Promocionado' },
    { name: 'Nicolas Gomez', state: 'Libre' },
  ]
  mostrar = true;

  toggle(): void {
    this.mostrar = !this.mostrar;
  }
}
