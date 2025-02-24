import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-user-page',
  imports: [CommonModule,TableModule],
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
