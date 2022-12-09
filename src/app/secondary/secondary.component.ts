import { PokemonService } from './../pokemon.service';
import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-secondary',
  templateUrl: './secondary.component.html',
  styleUrls: ['./secondary.component.scss']
})
export class SecondaryComponent implements OnInit {
  static pokemon: any;
  constructor (){}
  
  ngOnInit(): void {
    // DOOM
    // MONITOR
    const mainImage:any = document.getElementById('mainImage')
    const mainTitle:any = document.getElementById('mainTitle')
    const mainValue:any = document.getElementById('mainValue')
    // BOTONES
    const descriptionButton:any = document.getElementById('descriptionButton')
    const pesoButton:any = document.getElementById('pesoButton')
    const alturaButton:any = document.getElementById('alturaButton')

    const vidaButton:any = document.getElementById('vidaButton')
    const ataqueButton:any = document.getElementById('ataqueButton')
    const defensaButton:any = document.getElementById('defensaButton')
    const ataqueEspecialButton:any = document.getElementById('ataqueEspecialButton')
    const defensaEspecialButton:any = document.getElementById('defensaEspecialButton')
    const velocidadButton:any = document.getElementById('velocidadButton')

    const normalButton:any = document.getElementById('normalButton')
    const shinyButton:any = document.getElementById('shinyButton')

    const maleButton:any = document.getElementById('maleButton')
    const femaleButton:any = document.getElementById('femaleButton')


    async function obtenerPokemon(n:number|any) {
      let pokemon: {
        image:string,
        name:string, 
        weight:string, 
        height:string,
        vida: string,
        attack: string,
        defense: string,
        specialAttack: string,
        specialDefense: string,
        speed: string,
        shiny: string,
        female: string,
      };
      try{
        let url = "https://pokeapi.co/api/v2/pokemon/"+n
        const rest = await fetch(url,
          {
              headers:{
                  'accept':'aplication/json'
              }
          })
          const data = await rest.json()
          console.log(SecondaryComponent.pokemon)
          console.log(data.stats[0].base_stat)
          pokemon = {
            image: data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'],
            name: data.name,
            weight: data.weight + ' hg',
            height: data.height + ' dm',
            vida: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            specialAttack: data.stats[3].base_stat,
            specialDefense: data.stats[4].base_stat,
            speed: data.stats[5].base_stat,
            shiny: data['sprites']['versions']['generation-v']['black-white']['animated']['front_shiny'],
            female: data.sprites.front_female,
          }
          SecondaryComponent.pokemon = pokemon;
      }
      catch(error){
        console.log(error)
      }
    }
     
    function changePokemon(title:string,contain:string):void{
      mainTitle.innerText = title;
      mainImage.setAttribute('src', SecondaryComponent.pokemon.image);
      mainValue.innerText = contain;
    }

    function changeImage(title:string,contain:string):void{
      mainTitle.innerText = title;
      if(contain!=undefined){
        mainImage.setAttribute('src', contain);
      }
      mainValue.innerText = null;
    }


    //  descriptionButton.onclick = function description(){
    //   obtenerPokemon(PrincipalComponent.pokemonId);
    //   changePokemon('Nombre',SecondaryComponent.pokemon.name);
    //  }
    //  pesoButton.onclick = function description(){
    //   obtenerPokemon(PrincipalComponent.pokemonId);
    //   changePokemon('Peso',SecondaryComponent.pokemon.weight);
    //  }
    //  alturaButton.onclick = function description(){
    //   obtenerPokemon(PrincipalComponent.pokemonId);
    //   changePokemon('Altura',SecondaryComponent.pokemon.height);
    //  }
    //  vidaButton.onclick = function description(){
    //   obtenerPokemon(PrincipalComponent.pokemonId);
    //   changePokemon('Vida',SecondaryComponent.pokemon.vida);
    //  }
  //    ataqueButton.onclick = function description(){
  //     obtenerPokemon(PrincipalComponent.pokemonId);
  //     changePokemon('Ataque',SecondaryComponent.pokemon.attack);
  //    }
  //    defensaButton.onclick = function description(){
  //     obtenerPokemon(PrincipalComponent.pokemonId);
  //     changePokemon('Defensa',SecondaryComponent.pokemon.defense);
  //    }
  //    ataqueEspecialButton.onclick = function description(){
  //     obtenerPokemon(PrincipalComponent.pokemonId);
  //     changePokemon('Ataque Especial',SecondaryComponent.pokemon.specialAttack);
  //    }
  //    defensaEspecialButton.onclick = function description(){
  //     obtenerPokemon(PrincipalComponent.pokemonId);
  //     changePokemon('Defensa Especial',SecondaryComponent.pokemon.specialDefense);
  //    }
  //    velocidadButton.onclick = function description(){
  //     obtenerPokemon(PrincipalComponent.pokemonId);
  //     changePokemon('Velocidad',SecondaryComponent.pokemon.speed);
  //    }
     
  //    normalButton.onclick = function description(){
  //     obtenerPokemon(PrincipalComponent.pokemonId);
  //     changeImage('Normal',SecondaryComponent.pokemon.image)
  //    }

  //    shinyButton.onclick = function description(){
  //     obtenerPokemon(PrincipalComponent.pokemonId);
  //     changeImage('Shiny',SecondaryComponent.pokemon.shiny)
  //    }
  //    maleButton.onclick = function description(){
  //     obtenerPokemon(PrincipalComponent.pokemonId);
  //     changeImage('Macho',SecondaryComponent.pokemon.image)
  //    }
  //    femaleButton.onclick = function description(){
  //     obtenerPokemon(PrincipalComponent.pokemonId);
  //     changeImage('Hembra',SecondaryComponent.pokemon.female)
  //    }
  // }
  }
}
