import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewContactPageRoutingModule } from './add-new-contact-routing.module';

import { AddNewContactPage } from './add-new-contact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewContactPageRoutingModule
  ],
  declarations: [AddNewContactPage]
})
export class AddNewContactPageModule {}
