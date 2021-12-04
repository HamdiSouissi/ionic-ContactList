import { Component, NgModule } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewContactPage } from '../add-new-contact/add-new-contact.page';
import { ContactService } from '../contact.service';
import { UpdateContactPage } from '../update-contact/update-contact.page';
import { Ng2SearchPipe } from 'ng2-search-filter';
import { ViewContactPage } from '../view-contact/view-contact.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  searchTerm : string;
  contactList = [
   
  ];

  constructor(public modalCtrl:ModalController, public contactService:ContactService) {
    this.getAllContact()
  }


  async update(selectedContact){
    const modal = await this.modalCtrl.create({
      component: UpdateContactPage,
      componentProps:{contact: selectedContact}
    })
    modal.onDidDismiss().then(contactObject =>{
      this.getAllContact();
    })

    return await modal.present()
  }




  async viewContact(selectedContact){
    const modal = await this.modalCtrl.create({
      component: ViewContactPage,
      componentProps:{contact: selectedContact}

    })
    modal.onDidDismiss().then(contactObject =>{
      this.getAllContact();
    })

    return await modal.present()
  }








  delete(key){
    this.contactService.deleteContact(key)
    this.getAllContact();
  }


  async addContact(){
    const modal = await this.modalCtrl.create({
      component: AddNewContactPage,
      componentProps: {
        item:this.contactList
      }
    })

    modal.onDidDismiss().then(contactObject =>{
      this.getAllContact();

    })

    return await modal.present()
  }
  getAllContact(){
    this.contactList = this.contactService.getAllContact() ;

  }





}
