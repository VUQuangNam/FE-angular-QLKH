import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditDetailComponent } from './edit-detail/edit-detail.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CreateComponent } from './create/create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListdetailComponent } from './listdetail/listdetail.component';
import { NavbarComponent } from './navbar/navbar.component';
import {
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule
} from '@angular/material';
import { DataTableModule } from 'angular-6-datatable';
import { TestComponent } from './material/test.component';


@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        EditDetailComponent,
        CreateComponent,
        ListdetailComponent,
        NavbarComponent,
        TestComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatMenuModule,
        MatSidenavModule,
        MatDatepickerModule,
        MatInputModule,
        MatNativeDateModule,
        DataTableModule,
        MatTableModule,
        MatPaginatorModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
