import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { UserService } from '../../../../service/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  imports : [CardModule,TableModule,CommonModule],
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userId: string | null = null;
  user: any | null = null;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    console.log('User ID:', this.userId);

    if (this.userId) {
      this.userService.getUserById(this.userId).subscribe({
        next: (data) => {
          this.user = data;
        },
        error: (err) => {
          console.error('Errore nel recupero dell’utente:', err);
        }
      });
    }
  }
}