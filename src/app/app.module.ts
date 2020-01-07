import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditDetailComponent } from './edit-detail/edit-detail.component';
import { CreateComponent } from './create/create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListdetailComponent } from './listdetail/listdetail.component';
import { SideNavComponent } from './sidenav/sidenav.component';
import {
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule
} from '@angular/material';
import { DemoComponent } from './demo/demo.component';
import { IntroducingPageComponent } from './introducing-page/introducing-page.component';


@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        EditDetailComponent,
        CreateComponent,
        ListdetailComponent,
        SideNavComponent,
        DemoComponent,
        IntroducingPageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatMenuModule,
        MatSidenavModule,
        MatDatepickerModule,
        MatInputModule,
        MatNativeDateModule,
        MatTableModule,
        MatPaginatorModule,
        MatListModule,
        MatIconModule,
        MatToolbarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
