import { Injectable } from '@angular/core';


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

  create(){}
  delete(){}
  edit(){}

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
