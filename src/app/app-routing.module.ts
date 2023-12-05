import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
import { DetailsComponent } from './details/details.component';
import { PageerrorComponent } from './pageerror/pageerror.component';
import { HinzuComponent } from './hinzu/hinzu.component';

const routes: Routes = [
  {path:"",component: ListeComponent},
  {path:"liste",redirectTo:""},
  {path:"details/:id",component: DetailsComponent},
  {path:"hinzu", component: HinzuComponent},
  {path:"**", component: PageerrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
