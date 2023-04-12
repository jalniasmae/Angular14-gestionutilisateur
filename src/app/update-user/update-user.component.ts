import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})

export class UpdateUserComponent implements OnInit {
 
  id:number;
  user:User = new User();

  constructor(private service:UserService, private route:ActivatedRoute, private router:Router ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];

    this.service.getUserById(this.id).subscribe(data=>
      {this.user=data;});  
        
  }


  gotoUserList(){
    this.router.navigate(['/users']);
  }

  onSubmit(){
    this.service.updateUser(this.id,this.user).subscribe(date=>{this.gotoUserList();})
  }

}
