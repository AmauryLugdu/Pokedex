import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from 'src/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  newUser: User = new User;

  users: User [] = [];

  username = new FormControl ('');
  mail = new FormControl ('');
  password = new FormControl ('');
  address = new FormControl ('');
  userDisplay: boolean = false;


  constructor() { }

  ngOnInit() {
  }

  CreateUser(){
    this.newUser.username = this.username.value;
    this.newUser.mail = this.mail.value;
    this.newUser.password = this.password.value;
    this.newUser.address = this.address.value;
    this.users.push(this.newUser);
    this.newUser = new User;
    this.userDisplay = true;
    console.log(this.users)

  }


}
