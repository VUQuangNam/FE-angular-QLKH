import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { Routes, RouterModule } from '@angular/router';
import { EditDetailComponent } from './edit-detail/edit-detail.component';
import { CreateComponent } from './create/create.component';
import { ListdetailComponent } from './listdetail/listdetail.component';
import { DemoComponent } from './demo/demo.component';
import { IntroducingPageComponent } from './introducing-page/introducing-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
        children: [
            { path: 'create', component: CreateComponent },
            { path: 'list', component: ListdetailComponent },
            { path: '', component: IntroducingPageComponent },
            { path: 'demo', component: DemoComponent },
            { path: 'edit/:id', component: EditDetailComponent },
        ]
    },
    { path: 'dang-nhap', component: SignInComponent },
    { path: 'dang-ky', component: SignUpComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],

    exports: [RouterModule],
})
export class AppRoutingModule { }
