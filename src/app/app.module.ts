import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule} from '@angular/flex-layout';



import { AppComponent } from './app.component';
import { EzxpressService } from './ezxpress.service';
import { AddMotoboyComponent } from './add-motoboy/add-motoboy.component';
import { MapComponent } from './map/map.component';
import { NewclientComponent } from './newclient/newclient.component';
import { HomeComponent } from './home/home.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { MapService } from './map.service';


@NgModule({
  declarations: [
    AppComponent,
    AddMotoboyComponent,
    MapComponent,
    NewclientComponent,
    HomeComponent,
    DeliveryComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB-G0WodfAOEjuc9WcD0lC70UesBjzJG9g'
    }),
    MatToolbarModule,
    FlexLayoutModule
    
  ],
  providers: [EzxpressService, MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
