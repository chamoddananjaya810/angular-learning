import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {


  // 3. HTML input වලට bind කරන්න variables දෙකක් හදමු
  username: string = '';
  password: string = '';

  // 4. Button එක click කළාම වැඩ කරන function එක
  onLogin() {
    // දැනට, අපි data console එකේ print කරලා බලමු
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    
    // (ඇත්ත project එකකදී, මෙතනින් තමයි API call එකක් යවලා userව check කරන්නේ)

    if (this.username === 'admin' && this.password === '123') {
      console.log('Login Successful!');
       alert('Login Successful!'); 
    } else {
      console.log('Login Failed!');
       alert('Login Failed! Invalid username or password.');
    }
  }
}
