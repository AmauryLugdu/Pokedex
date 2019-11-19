import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokedexPageComponent } from './Page/pokedex-page.component';
import { PokemonListComponent } from './Component/pokemon-list.component';
import { PokemonDetailComponent } from './Component/pokemon-detail.component';
import { CreatePokemonPageComponent } from './Page/create-pokemon-page/create-pokemon-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PokedexPageComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    CreatePokemonPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
