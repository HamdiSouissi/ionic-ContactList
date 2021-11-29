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
  categories =[]
  categorySelectedCategory
  nom:string
  prenom:string
  tel1:number
  tel2:number
  dateCreation:Date
  contactObject
  itemCategory
  constructor(public modalCtrl:ModalController, public contactService:ContactService) { }

  ngOnInit() {
    this.categories.push('Amis')
    this.categories.push('Famille')
    this.categories.push('Professionnel')
    this.categories.push('Autre')
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
    itemCategory:this.categorySelectedCategory,
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

  selectCategory(index){
    this.categorySelectedCategory = this.categories[index]
    console.log(this.categorySelectedCategory);
  }
}
