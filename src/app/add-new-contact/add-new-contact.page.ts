import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-add-new-contact',
  templateUrl: './add-new-contact.page.html',
  styleUrls: ['./add-new-contact.page.scss'],
})
export class AddNewContactPage implements OnInit {
  nom:string
  prenom:string
  tel1:number
  tel2:number
  dateCreation:Date
  contactObject
  constructor(public modalCtrl:ModalController, public contactService:ContactService) { }

  ngOnInit() {
  }
 async  dismis(){
   await this.modalCtrl.dismiss(this.contactObject)
 }

 async addContact(){
  this.contactObject=({
    nom:this.nom,
    prenom:this.prenom,
    tel1: this.tel1,
    tel2: this.tel2,
    dateCreation: Date.now()
  })

let uid = this.nom + this.prenom

if (uid){
  await this.contactService.addContact(uid,this.contactObject)

}else {
console.log("ajouter un numéro de téléphone");
}



  this.dismis()
 }
}
