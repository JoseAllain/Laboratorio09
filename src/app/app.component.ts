import {Component, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
@Component({
  imports: [CommonModule, RouterOutlet,],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'classcraft';
}
