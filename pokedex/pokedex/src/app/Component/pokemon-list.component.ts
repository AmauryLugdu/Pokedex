import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../Shared/pokemon';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

/**
 * Recoit le tableau de pokemons depuis pokedex-page.component.html : [pokemonsInput]=
 */
  @Input() pokemonsInput : Pokemon[];

/**
 * pokemonClicked emet un nouvel evenement vers pokedex-page.component.html : (pokemonClicked)=
 */
  @Output() pokemonClicked = new EventEmitter<Pokemon>();

 
  constructor() { }

  ngOnInit() {
  }

/**
* au click d'un pokemon (p) de la liste pokemonsInput, onClick émet les attributs de la class Pokemon (nom, url, description) (défini
* dans le EventEmitter)
*/

  onClick(p) {
    this.pokemonClicked.emit(p);
  }
}
