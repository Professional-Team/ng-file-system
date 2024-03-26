import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { HttpService } from './utils/http.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatButtonModule, MatDividerModule, MatIconModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  httpService = inject(HttpService);

  disks: any[] = [];

  ngOnInit(): void {
    debugger
    this.httpService.getDisksInfo().subscribe({
      next: (response: any) => {
        if (response?.status === 1) {
          this.disks = response.disks
        }
      },
      error: (err: any) => {
        debugger
      },
      complete: () => {
        console.log('completed');
      },
    });
  }


}
