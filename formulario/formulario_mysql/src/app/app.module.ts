import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@NgModule({
  declarations: [FormGroup],
  imports: [CommonModule, HttpClientModule, HttpClient],
  providers: [],
})
export class AppModule {}
