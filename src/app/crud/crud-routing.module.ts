import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetaildataComponent } from './detaildata/detaildata.component';
import { DetailsComponent } from './details/details.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path:'form',
    component:FormComponent
  },
  {
    path:'details',
    component:DetailsComponent
  },
  {
    path:'details/:id',
    component:DetaildataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
