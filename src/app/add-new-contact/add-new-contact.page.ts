import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { toastController } from '@ionic/core';
import { ContactService } from '../contact.service';
import { Storage } from '@ionic/storage';

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
  constructor(public modalCtrl:ModalController, public contactService:ContactService,public toastCtrl:ToastController,public storage:Storage) { }

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

}
else {
this.openToast()


}



  this.dismis()
 }

  selectCategory(index){
    this.categorySelectedCategory = this.categories[index]
    console.log(this.categorySelectedCategory);
  }

  async openToast() {  
    const toast = await this.toastCtrl.create({  
      message: 'ajouter un numéro de téléphone',   
      duration: 4000  
    });  
    toast.present();  
  }  






}
