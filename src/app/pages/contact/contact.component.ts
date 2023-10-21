import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from 'src/app/services/contacts.service';
import { Contact } from 'src/app/interfaces/contact';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
    contactsService = inject(ContactsService)
    contactos:Contact[] = []

    private routeID = this.route.snapshot.paramMap.get('id')
    
    constructor(private route: ActivatedRoute) {}

      async ngOnInit(){
        this.contactos = await this.contactsService.getByID(this.routeID)
      }

}
