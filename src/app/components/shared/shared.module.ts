import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AuthModule } from '../auth/auth.module';



@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    AuthModule
  ],
  exports:[
    SidebarComponent
  ],
})
export class SharedModule { }
