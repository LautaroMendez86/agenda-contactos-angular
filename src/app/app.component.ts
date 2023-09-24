import { Component, inject } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  authService = inject(AuthService)

  isLogin = this.authService.isLogin
  
  title = 'clase-03';
}
