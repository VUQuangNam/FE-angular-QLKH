import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { Routes, RouterModule } from '@angular/router';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { EditDetailComponent } from './edit-detail/edit-detail.component';
import { CreateComponent } from './create/create.component';
import { MomentModule } from 'ngx-moment';




const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'list', component: ListDetailComponent },
    { path: 'edit/:id', component: EditDetailComponent },
    { path: 'create', component: CreateComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],

    exports: [RouterModule],
})
export class AppRoutingModule { }
