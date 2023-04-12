import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
  users:User[]=[];
  constructor(private service:UserService, private router:Router) { }

  ngOnInit(): void {
    this.getUsers();
  }


  getUsers(){
    this.service.getUserList().subscribe(data=>{
      this.users=data;
      console.log(data);
    })
  }

  updateUser(id:number){
    this.router.navigate(['update-user',id]);
  }

  deleteUser(id:number){
    this.service.deleteUser(id).subscribe(data=>{
      this.getUsers();
     })
  }

  
}
