import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from 'src/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeService } from 'src/home/home.service';
import { DataFilterPipe } from 'src/home/filter.pipe';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        DataFilterPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [
        HomeService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
