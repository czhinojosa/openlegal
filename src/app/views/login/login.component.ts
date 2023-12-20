import { Component } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

    constructor() { }

    onLogin(): void {
        // Add login logic here
        console.log('Email:', this.email, 'Password:', this.password);
    }
}