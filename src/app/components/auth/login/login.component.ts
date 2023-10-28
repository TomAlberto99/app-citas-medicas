import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/models';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string ='';
  password: string = '';
  loginError: boolean = false;
  dataUser: User[] = [];

  ngOnInit(): void {
    
  }

  constructor( private router : Router , private apiServer: ApiService ){}

  
  public onSubmit(){
    this.apiServer.getApiLog().subscribe((data: User[]) => {
      this.dataUser = data;
      console.log(this.dataUser);
      const userToFind = this.dataUser.find(
        (user) => user.email === this.email && user.password === this.password
      );
      if (userToFind) {
        this.router.navigate(['/home']);
        console.log("Login On!");
      } else {
        this.loginError = true;
        console.log("Login off!");
      }
    },

  );
  }

   public getEstusLog():boolean{
    return this.loginError;
  }
}
