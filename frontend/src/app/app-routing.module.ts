import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './components/users/users.component';
import { ServiceOrdersComponent } from './components/service-orders/service-orders.component';
import { ServicesComponent } from './components/services/services.component';
import { CreateUserComponent } from './components/users/create-user/create-user.component';
import { UpdateUserComponent } from './components/users/update-user/update-user.component';

const routes: Routes = [
  {path: 'service-orders', component: ServiceOrdersComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'users', component: UsersComponent},
  {path: 'users/new', component: CreateUserComponent},
  {path: 'users/:id', component: UpdateUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
