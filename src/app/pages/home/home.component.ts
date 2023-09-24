import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ContactsService } from 'src/app/services/contacts.service';
import { Contact } from 'src/app/interfaces/contact';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  contacts:Contact[] = []
  authService = inject(AuthService)
  contactsService = inject(ContactsService)

  constructor(private route: ActivatedRoute, private router: Router) {

    if(!this.authService.isLogin){
        this.router.navigate(['register'], { relativeTo: this.route });
    }
  
  }
 
  async ngOnInit(){
    // this.contacts = await this.contactsService.getAll()
    this.contacts = await this.contactsService.getAll()
    // this.contacts = await this.contactsService.index()
  }
  
}
