import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewContactPage } from './add-new-contact.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewContactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewContactPageRoutingModule {}
