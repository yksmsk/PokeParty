import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from "../components/components.modules"

import { HomePage } from './home.page';
import { PokedexComponent } from "../pages/pokedex/pokedex.component";
import { PartyComponent } from "../pages/party/party.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    ComponentsModule,
  ],
  declarations: [
    HomePage,
    PokedexComponent,
    PartyComponent
  ],
  exports: [
    PokedexComponent,
    PartyComponent
  ]
})
export class HomePageModule { }
