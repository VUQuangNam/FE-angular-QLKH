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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatTableModule, MatSortModule} from '@angular/material'
// import { from } from 'rxjs';
// import { UserComponent } from './user/user.component';

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        EditDetailComponent,
        CreateComponent,
        // UserComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        BrowserAnimationsModule,
        // MatTableModule,
        // MatSortModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
