import { Component, OnInit, inject } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';
import { Contact } from 'src/app/interfaces/contact';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  contactsService = inject(ContactsService);
  contacts:Contact[] = []

  ngOnInit(): void {
    this.fetchContacts();
  }

  async fetchContacts(){
    this.contacts = await this.contactsService.getAll()
  }

}