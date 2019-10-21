import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ListDetailComponent } from './list-detail/list-detail.component';
import { EditDetailComponent } from './edit-detail/edit-detail.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CreateComponent } from './create/create.component';
import { ListDetailFilterComponent } from './list-detail-filter/list-detail-filter.component';

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        ListDetailComponent,
        EditDetailComponent,
        CreateComponent,
        ListDetailFilterComponent,
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
