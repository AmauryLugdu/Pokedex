import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from "./pokemons-mock";


@Injectable({
  providedIn: 'root'
})
export class PokedexService {


  /**
   * la variable/attribut pokemons de type tableau de pokemon est égale au tableau POKEMONS en dure 
   */

  pokemons: Pokemon[] = POKEMONS;

  constructor() { }

  /**
   * 
   * @param pokemon Ajoute un nouveau pokemon de type Pokemon dans la liste "pokemons"
   */
  addPokemon(pokemon: Pokemon){
    this.pokemons.push(pokemon)
  }

  
}
