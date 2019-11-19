import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../Shared/pokemon';
import { PokedexService } from '../Shared/pokedex.service';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.scss']
})
export class PokedexPageComponent implements OnInit {
/**
 * pokemons et pokemonDetail sont de type tableau de Pokemon.
 */
  pokemons: Pokemon[];
  pokemonDetail: Pokemon;
  
/**
 * 
 * @param service est le "représentant" de PokedexService (injection) c'est un objet de type PokedexService
 */
  constructor(private service: PokedexService) { }


/**
 * A l'initialisation de la page (ouverture), this.pokemons va chercher les pokemons depuis le service (PokedexService)
 */

  ngOnInit() {
    this.pokemons = this.service.pokemons;
  }

  /**
   * Au click d'un pokemon dans la liste
   * @param pokemon pokemon clique dans la liste
   */
  getPokemonCliked(pokemon: Pokemon) {
    this.pokemonDetail = pokemon;
  }
}
