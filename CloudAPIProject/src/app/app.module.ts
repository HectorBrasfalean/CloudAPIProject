import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from "primeng/toolbar";

import { AppComponent } from './app.component';
import { APIServiceService } from './apiservice.service';
import { SpecificCharacterComponent } from './specific-character/specific-character.component';
import { AllCharacterComponent } from './all-character/all-character.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FootballerComponentComponent } from './footballer-component/footballer-component.component';
import { SettingsFootballersComponent } from './settings-footballers/settings-footballers.component';
import { SpecificFootballerComponent } from './specific-footballer/specific-footballer.component';

@NgModule({
  declarations: [
    AppComponent,
    SpecificCharacterComponent,
    AllCharacterComponent,
    ToolbarComponent,
    FootballerComponentComponent,
    SettingsFootballersComponent,
    SpecificFootballerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ToolbarModule,
    ButtonModule,
    RouterModule.forRoot([
      { path: "all", component: AllCharacterComponent},
      { path: "specific", component: SpecificCharacterComponent},
      { path: "footballers", component: FootballerComponentComponent},
      { path: "footballerbyid", component: SpecificFootballerComponent},
      { path: "settings", component: SettingsFootballersComponent},
      { path: "", redirectTo: "all", pathMatch: "full"}
    ])
  ],
  providers: [APIServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
