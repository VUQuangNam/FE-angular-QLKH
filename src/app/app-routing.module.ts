import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { Routes, RouterModule } from '@angular/router';
import { EditDetailComponent } from './edit-detail/edit-detail.component';
import { CreateComponent } from './create/create.component';
import { ListdetailComponent } from './listdetail/listdetail.component';
import { TestComponent } from './material/test.component';


const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'edit/:id', component: EditDetailComponent },
    { path: 'create', component: CreateComponent },
    { path: 'list', component: ListdetailComponent },
    { path: 'test', component: TestComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],

    exports: [RouterModule],
})
export class AppRoutingModule { }
