import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { CountryDropdownComponent } from './country-dropdown/country-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    CountryDropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,UserFormComponent,CountryDropdownComponent,FormGroup]
})
export class AppModule { }
