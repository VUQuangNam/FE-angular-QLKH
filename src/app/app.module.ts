import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { EditDetailComponent } from './edit-detail/edit-detail.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CreateComponent } from './create/create.component';

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        EditDetailComponent,
        CreateComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
