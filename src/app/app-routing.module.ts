import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { Routes, RouterModule } from '@angular/router';
import { EditDetailComponent } from './edit-detail/edit-detail.component';
import { CreateComponent } from './create/create.component';
import { ListdetailComponent } from './listdetail/listdetail.component';
import { DemoComponent } from './demo/demo.component';
import { IntroducingPageComponent } from './introducing-page/introducing-page.component';


const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
        children: [
            { path: 'create', component: CreateComponent },
            { path: 'list', component: ListdetailComponent },
            { path: '', component: IntroducingPageComponent },
            { path: 'demo', component: DemoComponent },
        ]
    },
    // { path: '', component: HomePageComponent },
    // { path: 'edit/:id', component: EditDetailComponent },
    // { path: 'create', component: CreateComponent },
    // { path: 'list', component: ListdetailComponent },
    // { path: 'demo', component: DemoComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],

    exports: [RouterModule],
})
export class AppRoutingModule { }
