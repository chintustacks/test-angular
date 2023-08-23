import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimenumberPipesPipe } from './custom-pipes/primenumber/primenumber-pipes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PrimenumberPipesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
