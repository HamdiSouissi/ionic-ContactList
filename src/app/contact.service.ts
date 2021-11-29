import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Key } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private storage:Storage) {
    this.init()
   }

  addContact(key, value) {
    this.storage.set(key,value)
  }
  deleteContact(key){
    this.storage.remove(key)
  }
  updateContact(key, newValue){
    this.storage.set(key, newValue)
    this.getAllContact()
  }
  getAllContact(){
    let contacts: any = []
    this.storage.forEach((key, value, index) => {
    contacts.push({'key':value, 'value':key})
    });
    return contacts
  }

  async init(){
    await this.storage.create()
  }
}
