

//Imports nativos do Angular:
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';




//Imports do Desenvolvedor:
//import { PhotoComponent } from './photos/photo/photo.component';
import { PhotosModule } from './photos/photos.module';


@NgModule({
  declarations: [
    AppComponent,

    //PhotoComponent
  ],
  imports: [
    BrowserModule,
    PhotosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
