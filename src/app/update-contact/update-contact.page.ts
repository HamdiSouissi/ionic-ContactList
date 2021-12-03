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
  categories =[]
  categorySelectedCategory
  itemCategory
  constructor(public modalCtrl:ModalController,public contactService:ContactService) { }

  ngOnInit() {
    this.categories.push('Amis')
    this.categories.push('Famille')
    this.categories.push('Professionnel')
    this.categories.push('Autre')
       this.nom = this.contact.value.nom
       this.prenom = this.contact.value.prenom
       this.tel1 = this.contact.value.tel1
       this.tel2 = this.contact.value.tel2
       this.categorySelectedCategory = this.contact.value.itemCategory
       this.dateCreation = this.contact.value.dateCreation
       this.dateMaj = this.contact.value.dateMaj

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
      itemCategory:this.categorySelectedCategory,
      dateCreation:this.dateCreation,
      dateMaj : Date.now()

    })
    let uid =this.contact.key
    await this.contactService.updateContact(uid,this.contactObject)
    this.dismis()
  }

  selectCategory(index){
    this.categorySelectedCategory = this.categories[index]
    console.log(this.categorySelectedCategory);
  }

}
