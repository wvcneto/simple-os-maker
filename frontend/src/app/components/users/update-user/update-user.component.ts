import { Component, OnInit } from '@angular/core';
import { RequestUser, ResponseCreate } from '../user.model';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id: string;
  request: RequestUser;

  response: ResponseCreate;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(this.id).subscribe(
      res => {
        this.request = {
          name: `${res.data.name}`,
          email: `${res.data.email}`,
          phone: `${res.data.phone}`,
          document: `${res.data.document}`,
          type: `${res.data.type}`,
        }
      }
    );
  }

  update() {
    this.userService.updateUser(this.id, this.request).subscribe(res => {
      this.response = res;
    });
  }

}
