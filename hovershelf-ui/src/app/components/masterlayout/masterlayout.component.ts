import { Component } from '@angular/core';
import { SafePipe } from '../../pipes/safe.pipe';

@Component({
  selector: 'app-masterlayout',
  standalone: true,
  imports: [SafePipe],
  templateUrl: './masterlayout.component.html',
  styleUrl: './masterlayout.component.scss'
})
export class MasterlayoutComponent 
{
  microUiUrl = 'http://localhost:4201';
}
