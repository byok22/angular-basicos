import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent{
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  heroeBorrado: string = '';
  
  borrarHeroe(): void{
    const heroeBorrado2 = this.heroes.shift() || '';
    this.heroeBorrado = heroeBorrado2;

   
  }
 
}

