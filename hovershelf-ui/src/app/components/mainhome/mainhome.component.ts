import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mainhome',
  standalone: true,
  imports: [RouterModule,CommonModule,FooterComponent],
  templateUrl: './mainhome.component.html',
  styleUrl: './mainhome.component.scss'
})
export class MainhomeComponent {

}
