import { PrincipalComponent } from './../principal/principal.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondary',
  templateUrl: './secondary.component.html',
  styleUrls: ['./secondary.component.scss']
})
export class SecondaryComponent implements PrincipalComponent, OnInit {

  constructor (){}
  
  ngOnInit(): void {
     console.log(PrincipalComponent.pokemonId);

    const changePokemon = ():void=>{
      console.log(PrincipalComponent.pokemonId);
      
    }
    
  }

}
