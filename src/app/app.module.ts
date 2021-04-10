

//Imports nativos do Angular:
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';



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
    PhotosModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
