import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactsService } from 'src/app/services/contacts.service';
import { Contact } from 'src/app/interfaces/contact';

@Component({
  selector: 'app-nuevo-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nuevo-contacto.component.html',
  styleUrls: ['./nuevo-contacto.component.scss']
})
export class NuevoContactoComponent {
  contactsService = inject(ContactsService);
  @Output() cerrar = new EventEmitter();
  @Input() contacto:Contact = {
    gender: '',
    name: {
      title: '',
      first: '',
      last: ''
    },
    location: {
      street: {
        number: 0,
        name: ''
      },
      city: '',
      state: '',
      country: '',
      postcode: 0,
      coordinates: {
        latitude: '',
        longitude: ''
      },
      timezone: {
        offset: '',
        description: ''
      }
    },
    email: '',
    login: {
      uuid: '',
      username: '',
      password: '',
      salt: '',
      md5: '',
      sha1: '',
      sha256: ''
    },
    dob: {
      date: '',
      age: 0
    },
    registered: {
      date: '',
      age: 0
    },
    phone: '',
    cell: '',
    id: {
      name: '',
      value: ''
    },
    picture: {
      large: '',
      medium: '',
      thumbnail: ''
    },
    nat: ''
  };
  
  async onSubmit(){
    this.contacto.id ?
    this.editarContacto() :
    this.agregarContacto();
  }

  async agregarContacto(){
    const res = await this.contactsService.create(this.contacto);
    this.cerrar.emit();
    if(res){
      // generarMensajeExito('Contacto agregado');
    } else {
      // generarMensajeError('Error agregando contacto');
    }
  }

  async editarContacto(){
    const res = await this.contactsService.edit(this.contacto);
    this.cerrar.emit();
    if(res){
      // generarMensajeExito('Contacto editado');
    } else {
      // generarMensajeError('Error editando contacto');
    }
  }

}
