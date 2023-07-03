import {Routes} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BusinessContactsListComponent } from './business-contacts-list/business-contacts-list.component';
import { AuthGuard } from './guard/auth.guard';

const appRoutes : Routes = [
    {
        path:'home',
        component: HomeComponent

    },
    {
        path:'about',
        component: AboutComponent


    },
    {
        path: 'projects',
        component: ProjectsComponent

    },
    {
        path: 'services',
        component: ServicesComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'register', component: RegisterComponent
    },
    {
        path: 'login', component: LoginComponent
    }
]

export default appRoutes;