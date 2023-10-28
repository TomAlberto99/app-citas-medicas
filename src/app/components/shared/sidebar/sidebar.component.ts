import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from '../../auth/login/login.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {



  ngOnInit(): void {

    
  }
  constructor(private router:Router ){}
  public goToHome(){
    this.router.navigate(["/home"]);
  }
  public goToLogin(){
    this.router.navigate(["/login"]);
  }
  public goToTurnos(){
    this.router.navigate(["/turnos"]);
  }

}
