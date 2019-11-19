import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/Shared/pokemon';
import { PokedexService } from 'src/app/Shared/pokedex.service';

@Component({
  selector: 'app-create-pokemon-page',
  templateUrl: './create-pokemon-page.component.html',
  styleUrls: ['./create-pokemon-page.component.scss']
})
export class CreatePokemonPageComponent implements OnInit {

  /**
   * Pokemon en cours de creation
   */
  newPokemon: Pokemon = new Pokemon();


  /**
   * 
   * @param service injection du service 
   */
  constructor(private service : PokedexService) { }

  ngOnInit() {
  }

  /**
   * apelle la fonction addPokemon() qui se situe dans le service. prend en parametre newPokemon. défini plus haut.
   */
  addPokemonFromForm() {
    this.service.addPokemon(this.newPokemon);
    // this.newPokemon = new Pokemon();
  }
}
