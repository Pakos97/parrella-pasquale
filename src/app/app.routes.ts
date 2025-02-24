import { Routes } from '@angular/router';
import { UserPageComponent } from './feature/user-page/user-page/user-page.component';
import { UserDetailComponent } from './feature/user-page/user-page/user-detail/user-detail.component';

export const routes: Routes = [
    
        {path: '', redirectTo: '/users', pathMatch: 'full'},


    {
        path: 'users',
        component: UserPageComponent

    },

    { path: 'users/:id', component: UserDetailComponent }

    
];
