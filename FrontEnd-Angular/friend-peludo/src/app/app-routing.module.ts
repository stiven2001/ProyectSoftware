import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePublicComponent } from './home/home-public/home-public.component';


const routes: Routes = [
  {
        path: '',
        component: HomePublicComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
