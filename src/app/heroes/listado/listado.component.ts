import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Hawkeye'];

  comprobarBorrado: boolean = false;

  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.pop() || '';
    this.comprobarBorrado = true;
  }

  heroeBorrado: string  = '';

}
