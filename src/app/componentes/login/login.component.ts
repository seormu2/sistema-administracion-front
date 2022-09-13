import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private readonly service: UserService
  ) { }

  ngOnInit(): void {
    console.log("hola")
  }

  createAccess(): void {
    const body = {
      "username": "sebaormu",
      "password": "holamundo"
    }
    this.service.createAccess(body).subscribe(
      result => console.log("resultado",result)
    )
  }

}
