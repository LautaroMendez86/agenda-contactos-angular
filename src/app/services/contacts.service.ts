import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';
import { API } from '../constants/api';


@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }

  async index(){
    const response = await fetch("https://randomuser.me/api/?results=500")
    const users = await response.json()
    return users.results
  }

  async create(contact:Contact):Promise<boolean>{
    if(contact.id) return false;
    const res = await fetch(API+'contacts',{
      method:'POST',
      headers:{
        "Content-type":"application/json"
      },
      body: JSON.stringify(contact)
    })
    return res.ok
  };

  async delete(id:number):Promise<boolean>{
    const res = await fetch(API+'contacts/'+id,{
      method:'DELETE'
    })
    return res.ok
  };
  
  async edit(contact:Contact):Promise<boolean>{
    if(!contact.id) return false;
    const res = await fetch(API+'contacts',{
      method:'PUT',
      headers:{
        "Content-type":"application/json"
      },
      body: JSON.stringify(contact)
    })
    return res.ok
  };
  
  async getByID(id:string | null){
    const response = await fetch('../../assets/db/contact.json')
    const users = await response.json()

    return users.results.filter((el: { id: { value: string; }; }) => el.id.value === id)
  }

  async getAll(){
    const response = await fetch('../../assets/db/contact.json')
    const users = await response.json()
    return users.results.filter((el: any) => el.id.value)
  }

  async getAllPosta() {
    const response = await fetch("https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb")
    const users = await response.json();
    return users.results[0]
  }
  

  getById(){}
}
