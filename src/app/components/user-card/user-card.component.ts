import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact';
@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {

  @Input() contacto!: Contact 

}
