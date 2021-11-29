import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.page.html',
  styleUrls: ['./update-contact.page.scss'],
})
export class UpdateContactPage implements OnInit {

  @Input() contact;
  nom:string
  prenom:string
  tel1:number
  tel2:number
  dateMaj: Date
  dateCreation:Date
  contactObject
  contactCategory
  categories =[]
  categorySelectedCategory
  constructor(public modalCtrl:ModalController,public contactService:ContactService) { }

  ngOnInit() {
       this.nom = this.contact.value.nom
       this.prenom = this.contact.value.prenom
       this.tel1 = this.contact.value.tel1
       this.tel2 = this.contact.value.tel2
       this.categorySelectedCategory = this.contact.value.contactCategory
       this.dateCreation = this.contact.value.dateCreation
       this.dateMaj = this.contact.value.dateMaj

  }

  selectCategory(index){
    this.categorySelectedCategory = this.categories[index]
    console.log(this.categorySelectedCategory);
  }

  async dismis(){
    await this.modalCtrl.dismiss()
  }
  async update(){
    this.contactObject=({
      nom:this.nom,
      prenom:this.prenom,
      tel1: this.tel1,
      tel2: this.tel2,
      contactCategory:this.categorySelectedCategory,
      dateCreation:this.dateCreation,
      dateMaj : Date.now()

    })
    let uid =this.contact.key
    await this.contactService.updateContact(uid,this.contactObject)
    this.dismis()
  }

}
