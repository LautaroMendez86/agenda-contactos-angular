import { Component, inject } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  authService = inject(AuthService)

  constructor(){}

  logIn(){
    this.authService.logIn()
  }
}
