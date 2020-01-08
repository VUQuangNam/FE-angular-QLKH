import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { IntroducingPageComponent } from './introducing-page/introducing-page.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { CreateComponent } from './customers/create/create.component';
import { ListdetailComponent } from './customers/listdetail.component';
import { EditDetailComponent } from './customers/detail/detail.component';


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
