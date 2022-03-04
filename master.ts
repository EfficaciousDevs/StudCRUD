import { Component, OnInit, ViewChild } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { StudentComponent } from'../student/student.component';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  users: any = [];

  constructor(private _userService: MyServiceService) { }

  @ViewChild(StudentComponent)
  stuComp: StudentComponent;

  ngOnInit() {
    this.getData();
  }
  getData(){
    this
      ._userService
      .getUsers()
      .subscribe((data: any) => {
        this.users = data;
        console.log(this.users);
    });
  }
  removeEmp(n:number){
    this.users.splice(n,1);
   }
   addUser(event){
    this._userService.postUsers(event)
  .subscribe(myData => this.users.push(myData));
   }
public edittUser(user,i){
  console.log('this studcomp', this.stuComp);
  this.stuComp.userForm.setValue({
    id: i,
    name: user.name,
    username: user.username,
    email: user.email,
    phone: user.phone,
    website: user.website
  });
  console.log('form value', this.stuComp);

   }
   
}


