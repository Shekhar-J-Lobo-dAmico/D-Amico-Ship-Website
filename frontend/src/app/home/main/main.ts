import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TopMenuBar } from '../../component/top-menu-bar/top-menu-bar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [CommonModule, TopMenuBar, RouterModule],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {

}
