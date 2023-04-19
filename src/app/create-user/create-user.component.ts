import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})

export class CreateUserComponent implements OnInit {

  user:User= new User();
  constructor(private service:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  
  saveUser(){
    console.log(this.user);
    this.service.createUser(this.user).subscribe(data=>{
      this.gotoUserList();
    })
  }

  gotoUserList(){
    this.router.navigate(['/users']);
  }

  onSubmit(){
    this.saveUser();
  }

}
