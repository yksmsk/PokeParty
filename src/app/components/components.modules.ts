import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { MenuComponent } from "./menu/menu.component";
import { MainContentComponent } from "./main-content/main-content.component";
import { SubContentComponent } from "./sub-content/sub-content.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [
    HeaderComponent,
    MenuComponent,
    MainContentComponent,
    SubContentComponent
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    MainContentComponent,
    SubContentComponent
  ]
})
export class ComponentsModule { }
