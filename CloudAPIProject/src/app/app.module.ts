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
import { callbackify } from 'util';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth/auth.guard';
import { CallbackComponent } from './callback/callback.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SpecificCharacterComponent,
    AllCharacterComponent,
    ToolbarComponent,
    FootballerComponentComponent,
    SettingsFootballersComponent,
    SpecificFootballerComponent,
    HomeComponent,
    CallbackComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ToolbarModule,
    ButtonModule,
    RouterModule.forRoot([
      { path: "home", component: HomeComponent},
      { path: "all", component: AllCharacterComponent, canActivate: [AuthGuard]},
      { path: "specific", component: SpecificCharacterComponent, canActivate: [AuthGuard]},
      { path: "footballers", component: FootballerComponentComponent, canActivate: [AuthGuard]},
      { path: "footballerbyid", component: SpecificFootballerComponent, canActivate: [AuthGuard]},
      { path: "settings", component: SettingsFootballersComponent, canActivate: [AuthGuard]},
      { path: "callback", component: CallbackComponent},
      { path: "", redirectTo: "all", pathMatch: "full"},
      { path: "**", redirectTo: "all", pathMatch: "full"}
    ])
  ],
  providers: [APIServiceService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
