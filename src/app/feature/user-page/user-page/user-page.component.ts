import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-page',
  imports: [CommonModule,TableModule,ButtonModule, RouterModule],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent implements OnInit {

  users: any[] = [];


  constructor(private userService: UserService,) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  
}
