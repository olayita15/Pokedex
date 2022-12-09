import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss']
})
export class TrainerComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {
    let lista:any = []

    async function obtenerPokemon(n:number|any) {
      let verificacion:boolean = true;
      let pokemon: {
        image:string,
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
          pokemon = {
            image: data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'],
          }
          lista.push(pokemon);
      }
      catch(error){
        console.log(error)
      }
    }

    function equipoPokemon():void{
      let verificacion:boolean = true;
      let misPokemons = [62,94,132,135,149,83]
      if(verificacion){
        misPokemons.forEach( element => {
          obtenerPokemon(element);
        });
        verificacion = false;
    }
      }
        

    // Dom
    const poke1:any = document.getElementById('poke1')
    const poke2:any = document.getElementById('poke2')
    const poke3:any = document.getElementById('poke3')
    const poke4:any = document.getElementById('poke4')
    const poke5:any = document.getElementById('poke5')
    const poke6:any = document.getElementById('poke6')

    const pokeGenerator:any = document.getElementById('pokeGenerator')
    equipoPokemon()
    pokeGenerator.onclick = function generarPokemons(){
      
      poke1.setAttribute('src', lista[0].image)
      poke2.setAttribute('src', lista[1].image)
      poke3.setAttribute('src', lista[2].image)
      poke4.setAttribute('src', lista[3].image)
      poke5.setAttribute('src', lista[4].image)
      poke6.setAttribute('src', lista[5].image)
      console.log(lista)
    }
    
    
  }
}


