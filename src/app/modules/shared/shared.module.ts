import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversalInterceptorService } from './interceptors/universal-interceptor.service';
import {FormsModule} from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    UniversalInterceptorService
  ],
  declarations: []
})
export class SharedModule { }
