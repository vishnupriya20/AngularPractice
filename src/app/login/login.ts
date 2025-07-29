import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Home } from '../home/home';
import { User } from '../user/user';

@Component({
  selector: 'app-login',
  imports: [Home],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
constructor(private router:Router, private userService:User){}
userName = signal('');
login(){
  this.userService.username.set(this.userName());
  this.router.navigate(['./home']);
}
}
