import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormioModule } from 'angular-formio';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomFormBuilderComponent } from './custom-form-builder/custom-form-builder.component';
import { FormsModule } from '@angular/forms'  
import { ReactiveFormsModule} from '@angular/forms' 

@NgModule({
  declarations: [
    AppComponent,
    CustomFormBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormioModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
