import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.page.html',
  styleUrls: ['./view-contact.page.scss'],
})
export class ViewContactPage implements OnInit {

  @Input() contact;
  nom:string
  prenom:string
  tel1:number
  tel2:number
  dateCreation:Date
  dateMaj : Date
  contactObject
  constructor(public modalCtrl:ModalController,public contactService:ContactService) { }

  ngOnInit() {
       this.nom = this.contact.value.nom
       this.prenom = this.contact.value.prenom
       this.tel1 = this.contact.value.tel1
       this.tel2 = this.contact.value.tel2
       this.dateCreation = this.contact.value.dateCreation
       this.dateMaj = this.contact.value.dateMaj

  }

  async dismis(){
    await this.modalCtrl.dismiss()
  }
  

}
