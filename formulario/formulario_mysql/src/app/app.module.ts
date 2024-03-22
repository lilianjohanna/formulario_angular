import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppSelectFieldComponent } from './app-select-field/app-select-field.component';
import { AppTextFieldComponent } from './app-text-field/app-text-field.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent,AppSelectFieldComponent,AppTextFieldComponent ]
})
export class AppModule { }
