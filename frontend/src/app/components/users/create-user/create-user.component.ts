import { Component, OnInit } from '@angular/core';
import { RequestUser, ResponseCreate } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  request: RequestUser = {
    name: '',
    email: '',
    phone: '',
    document: '',
    type: '',
  }

  response: ResponseCreate;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  save() {
    this.userService.createUser(this.request).subscribe(res => {
      this.response = res;
    });
  }
}
