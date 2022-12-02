import { PrincipalComponent } from './../principal/principal.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondary',
  templateUrl: './secondary.component.html',
  styleUrls: ['./secondary.component.scss']
})
export class SecondaryComponent {

  constructor (){}
  pokemonId!: number;

  // ngOnInit(): void {
    
  //   throw new Error('Method not implemented.');
  // }

}
