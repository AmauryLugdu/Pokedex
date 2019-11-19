import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokedexPageComponent } from './Page/pokedex-page.component';
import { CreatePokemonPageComponent } from './Page/create-pokemon-page/create-pokemon-page.component';


const routes: Routes = [
  {
    path:"",
    component: PokedexPageComponent},
  { path: "create",
    component: CreatePokemonPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
