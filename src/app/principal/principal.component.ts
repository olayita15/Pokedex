import { SecondaryComponent } from './../secondary/secondary.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  
  static pokemonId: number | undefined;
  constructor(){
    var pokemonId:number;
  }

  ngOnInit():void {
    // DOM
    // Head
    const typeImg:any = document.getElementById('typeImg')
    const led:any = document.querySelectorAll('.led')
    const redLed:any = document.querySelector('.red')
    const yellowLed:any = document.querySelector('.yellow')
    const greenLed:any = document.querySelector('.green')
    const searchInput:any = document.getElementById('searchInput')
    // Monitor
    const monitor:any = document.getElementById('monitor')
    const name:any = document.getElementById('name')
    const imgPrincipal:any = document.getElementById('imgPrincipal')
    const pokeId:any = document.getElementById('number')
    // Encendido y apagado
    const onButton:any = document.getElementById('on')
    const offButton:any = document.getElementById('off')
    // Selectores
    const selectorButton:any = document.getElementById('selector')
    const labelType1:any = document.getElementById('type1')
    const labelType2:any = document.getElementById('type2')
    const leftButton:any = document.getElementById('arrowLeft')
    const rightButton:any = document.getElementById('arrowRight')
    const upButton:any = document.getElementById('arrowUp')
    const downButton:any = document.getElementById('arrowDown')
    
    let lista:any = []
    let num:number
    // LISTA DE BACKGROUNDS
    var urlType: { [key: string]: string; } = {
      "grass" : "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1fa0f80-33c1-4516-8baa-90fb67ed2269/d755hbj-2a350c33-b053-497e-aa3e-26b9908bcb83.png/v1/fill/w_1024,h_576,q_80,strp/grass_pokemon_energy_wallpaper_by_elbarnzo_d755hbj-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvZDFmYTBmODAtMzNjMS00NTE2LThiYWEtOTBmYjY3ZWQyMjY5XC9kNzU1aGJqLTJhMzUwYzMzLWIwNTMtNDk3ZS1hYTNlLTI2Yjk5MDhiY2I4My5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.b2e4tYA7xn1Gr32PuQMO5lKremR6QGg8uohiTOBa29Y')",
      "fire" : "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1fa0f80-33c1-4516-8baa-90fb67ed2269/d7519pz-cab4cca0-3856-4a70-87d1-d5d809d9c0e4.png/v1/fill/w_1024,h_576,q_80,strp/fire_pokemon_energy_wallpaper_by_elbarnzo_d7519pz-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvZDFmYTBmODAtMzNjMS00NTE2LThiYWEtOTBmYjY3ZWQyMjY5XC9kNzUxOXB6LWNhYjRjY2EwLTM4NTYtNGE3MC04N2QxLWQ1ZDgwOWQ5YzBlNC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.1wpXy6FOa9BuS5AvxG7mGhtiW4JklHRo1pBwq3rgBWs')",
      "water" :"url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1fa0f80-33c1-4516-8baa-90fb67ed2269/d75ebft-c7b19fe1-d302-4940-8058-edd9506e76f1.png/v1/fill/w_1024,h_576,q_80,strp/water_pokemon_energy_wallpaper_by_elbarnzo_d75ebft-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvZDFmYTBmODAtMzNjMS00NTE2LThiYWEtOTBmYjY3ZWQyMjY5XC9kNzVlYmZ0LWM3YjE5ZmUxLWQzMDItNDk0MC04MDU4LWVkZDk1MDZlNzZmMS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.KGHRpsGuwKfL-K7CK7KDq-4QNxgcQjZpHVe-oWdlUfg')",
      "bug" :"url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1fa0f80-33c1-4516-8baa-90fb67ed2269/dajncbl-45c25a96-dbb4-4ad8-a823-fea773839227.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QxZmEwZjgwLTMzYzEtNDUxNi04YmFhLTkwZmI2N2VkMjI2OVwvZGFqbmNibC00NWMyNWE5Ni1kYmI0LTRhZDgtYTgyMy1mZWE3NzM4MzkyMjcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.aZ9hn9Gmq0rnObMKudsSD18qxiPTJijyAEFk5CP3T-w')",
      "normal" :"url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1fa0f80-33c1-4516-8baa-90fb67ed2269/d74i220-46efb57c-f214-4bf0-bb43-52a4c76d765a.png/v1/fill/w_1024,h_576,q_80,strp/colorless_pokemon_energy_wallpaper_by_elbarnzo_d74i220-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvZDFmYTBmODAtMzNjMS00NTE2LThiYWEtOTBmYjY3ZWQyMjY5XC9kNzRpMjIwLTQ2ZWZiNTdjLWYyMTQtNGJmMC1iYjQzLTUyYTRjNzZkNzY1YS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.aeJA2dIg_vxBjo017xcLmBpOm8SGPacNXjUiXf-9euU')",
      "poison" :"url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1fa0f80-33c1-4516-8baa-90fb67ed2269/dbi2b02-f19f2e42-b157-4986-a49a-e8bdaabf12f0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QxZmEwZjgwLTMzYzEtNDUxNi04YmFhLTkwZmI2N2VkMjI2OVwvZGJpMmIwMi1mMTlmMmU0Mi1iMTU3LTQ5ODYtYTQ5YS1lOGJkYWFiZjEyZjAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.HwFSUNFN44E345xasBtomJLAESqq6-2swyTR-QB4VN8')",
      "electric" :"url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1fa0f80-33c1-4516-8baa-90fb67ed2269/d74n7g8-d9e08cee-3a8d-45c4-b2bc-127d4839ea1c.png/v1/fill/w_1024,h_576,q_80,strp/electric_pokemon_energy_wallpaper_by_elbarnzo_d74n7g8-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvZDFmYTBmODAtMzNjMS00NTE2LThiYWEtOTBmYjY3ZWQyMjY5XC9kNzRuN2c4LWQ5ZTA4Y2VlLTNhOGQtNDVjNC1iMmJjLTEyN2Q0ODM5ZWExYy5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.XBz_pjUjkNv02DCfS1bO_eEQTRwg4wTaAJWjBsxgvEA')",
      "ground" :"url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1fa0f80-33c1-4516-8baa-90fb67ed2269/dbi2ame-7e0f56b2-2587-47db-8e2b-0429d1f40a80.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QxZmEwZjgwLTMzYzEtNDUxNi04YmFhLTkwZmI2N2VkMjI2OVwvZGJpMmFtZS03ZTBmNTZiMi0yNTg3LTQ3ZGItOGUyYi0wNDI5ZDFmNDBhODAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.uqsN5OKGsV61Ewg1nY11R-G0gz-3logl01Za-UM4vLs')",
      "fairy" :"url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1fa0f80-33c1-4516-8baa-90fb67ed2269/daoarj9-eeca0f14-698f-4ddb-9083-dadc70f35dc2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QxZmEwZjgwLTMzYzEtNDUxNi04YmFhLTkwZmI2N2VkMjI2OVwvZGFvYXJqOS1lZWNhMGYxNC02OThmLTRkZGItOTA4My1kYWRjNzBmMzVkYzIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hSLorhae7ITy-A9hIdFqJbOpcNXYn1MYj9kna1yW45U')",
      "fighting" :"url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1fa0f80-33c1-4516-8baa-90fb67ed2269/d74vo4c-5a80d30d-5b83-4986-ae83-15638f686b0c.png/v1/fill/w_1024,h_576,q_80,strp/fighting_pokemon_energy_wallpaper_by_elbarnzo_d74vo4c-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvZDFmYTBmODAtMzNjMS00NTE2LThiYWEtOTBmYjY3ZWQyMjY5XC9kNzR2bzRjLTVhODBkMzBkLTViODMtNDk4Ni1hZTgzLTE1NjM4ZjY4NmIwYy5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19._fQP2_Wt_tdMdsFSwFjWQVqtyLJrxX5NZAV1BMeskYk')",
      "psychic" :"url('https://pokemon-go.name/wp-content/uploads/2020/04/physic-type-pokemon-in-pokemon-go.jpg')",
      "rock" :"url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1fa0f80-33c1-4516-8baa-90fb67ed2269/dbi2b77-23f7e283-8756-4668-888a-b37605581478.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QxZmEwZjgwLTMzYzEtNDUxNi04YmFhLTkwZmI2N2VkMjI2OVwvZGJpMmI3Ny0yM2Y3ZTI4My04NzU2LTQ2NjgtODg4YS1iMzc2MDU1ODE0NzgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.nD77YbXWr_gLc4Ha9864oA1XvzLuVM7a-Xyhcu499L4')",
      "ghost" :"url('https://pokemon-go.name/wp-content/uploads/2020/04/ghost-type-pokemon-in-pokemon-go.jpg')",
      "ice" :"url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1fa0f80-33c1-4516-8baa-90fb67ed2269/dbi2axg-575b1b4d-60a6-422c-b7ed-7c48a8ea7dc4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QxZmEwZjgwLTMzYzEtNDUxNi04YmFhLTkwZmI2N2VkMjI2OVwvZGJpMmF4Zy01NzViMWI0ZC02MGE2LTQyMmMtYjdlZC03YzQ4YThlYTdkYzQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.mo0Yd6e_AhtUnKkZnx5G1L-1LOgQtLcTQK31YXePHgY')",
      "dragon" :"url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1fa0f80-33c1-4516-8baa-90fb67ed2269/dak4w59-4543ab66-519a-4fd1-9391-0cd0cd4b358f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QxZmEwZjgwLTMzYzEtNDUxNi04YmFhLTkwZmI2N2VkMjI2OVwvZGFrNHc1OS00NTQzYWI2Ni01MTlhLTRmZDEtOTM5MS0wY2QwY2Q0YjM1OGYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.B9ashDSKd6GEyHHdIFx7OGndqvz8WAe_sR4P35EV56Q')",
      "flying" :"url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1fa0f80-33c1-4516-8baa-90fb67ed2269/daoas8t-ba1dbb24-2a99-4fa3-9223-91d74351713f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QxZmEwZjgwLTMzYzEtNDUxNi04YmFhLTkwZmI2N2VkMjI2OVwvZGFvYXM4dC1iYTFkYmIyNC0yYTk5LTRmYTMtOTIyMy05MWQ3NDM1MTcxM2YucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.RQhj4YMrttav-VTX4ZHq1y__McsS5BTCxWX8ZZE-dZQ')",
    };
    // FUNCIONES
    // FUNCIÓN CAMBIAR POKEMON
    const changePokemon = (n:number):void =>{
      if(n>=0&&n<=151)
      {
        name.innerText = lista[n].name
        imgPrincipal.style.display = 'block'
        imgPrincipal.setAttribute('src', lista[n].image)
        pokeId.innerText = '#'+lista[n].id
        labelType1.innerText = lista[n].type1
        labelType2.innerText = lista[n].type2
        monitor.style.backgroundImage = urlType[lista[n].type1]
        labelType1.style.backgroundImage = urlType[lista[n].type1]
        labelType2.style.backgroundImage = urlType[lista[n].type2]
        PrincipalComponent.pokemonId = n+1
        console.log(PrincipalComponent.pokemonId)
      }
    }
    // ENCENDIDO
    onButton.onclick = async function on(){
      let pokemonList = [];
      let pokemon: {
        name:string, 
        image:string, 
        id:string, 
        type1:string, 
        type2:string,
      };
      redLed.style.backgroundImage = '-webkit-linear-gradient(top, #fb1304 0%, #e35843 50%, #edad99 100%)'
      try{
          for(let i =1; i<152;i++)
            {
            if(i==75){yellowLed.style.backgroundImage = '-webkit-linear-gradient(top, #f9a004 0%, #e0ac45 50%, #ead698 100%)'}
            else if(i==150){greenLed.style.backgroundImage = '-webkit-linear-gradient(top, #13fB04 0%, #58e343 50%, #ADED99 100%)'}
            let url = "https://pokeapi.co/api/v2/pokemon/"+i
            const rest = await fetch(url,
            {
                headers:{
                    'accept':'aplication/json'
                }
            })
            const data = await rest.json()
            
            pokemon = {
              name: data.name,
              image: data.sprites.other.home.front_default,
              id: data.id,
              type1: data.types[0].type.name,
              type2: '',
            }
            if(data.types[1]!=undefined){
              pokemon.type2 = data.types[1].type.name
            }
            pokemonList.push(pokemon)
            }
          lista = pokemonList
          monitor.style.backgroundImage = 'assets/grassType.png'
          num = 0
          this.pokemonId = num
          changePokemon(num)
          }
        catch (error){
          console.log(error)
      }
    }
    // APAGADO
    offButton.onclick = function off(){
      typeImg.setAttribute('src','assets/pokeIcon.png')
      monitor.style.background = 'black'
      name.innerText = null
      imgPrincipal.style.display = 'none'
      pokeId.innerText = null
      searchInput.value = null
      led.forEach(function(item:any) {
        item.style.backgroundImage = '-webkit-linear-gradient(top, #000000 0%, #000000 50%, #000000 100%)'
      })
    }
    // FUNCION SELECCIONAR
    selectorButton.onclick = function select(){
      let n:string = searchInput.value
      lista.forEach((element: any) => {
        if(n==element.name||n==element.id){
          num = element.id-1
          changePokemon(num)
        }
      })
    }

    // arrow
    leftButton.onclick = function left(){
      changePokemon(num--) 
      console.log(num)
      if(num<=0){
        num = 0
      }
    }

    rightButton.onclick = function rigth(){
      changePokemon(num++)
      console.log(num)
      if(num>=150){
        num = 151
      }
    }

    upButton.onclick = function up(){
      
    }

    downButton.onclick = function down(){
      
    }

  }
}
