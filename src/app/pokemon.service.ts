import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  id:number =1;
  name:string = '';
  image:string='';
  type1:string='';
  typo2:string='';

  constructor() { }

  async consumirPokemon(this: any, n:string){
    try{
        let url = "https://pokeapi.co/api/v2/pokemon/"+this.id
        const rest = await fetch(url,
          {
              headers:{
                  'accept':'aplication/json'
              }
          })
          const data = await rest.json()
          this.id = data.id
          this.name= data.name
          this.image= data.sprites.other.home.front_default
          this.type1= data.types[0].type.name
          if(data.types[1]!=undefined){
            this.type2 = data.types[1].type.name
          }
        }
      catch (error){
        console.log(error)
    }
  }
}
