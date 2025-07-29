import { Component } from '@angular/core';
import { User } from '../user/user';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
constructor(public userService:User){}
}
