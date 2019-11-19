import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../Shared/pokemon';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

/**
* Pokemon-detail.component recoit pokemonToDisplayInput de type Pokemon depuis pokedex-page.component html
*/
  @Input() pokemonToDisplayInput: Pokemon;

  constructor() {}

  ngOnInit() {
  }

}
