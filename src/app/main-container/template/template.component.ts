import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  constructor(private router: Router){

  }

  isLoggedIn():boolean {
    return sessionStorage.getItem('loggedIn') === 'true';
  }

  logout():void {
    sessionStorage.removeItem('loggedIn');
    sessionStorage.removeItem('formData');
    this.router.navigate(['/login']);
  }
}
