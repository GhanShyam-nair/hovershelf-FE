import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  onTabClick(tab: string) {
    console.log('Tab clicked:', tab);
  // Add your logic here to handle the tab click event
  }
  onTabClick2(tab: string) {
    console.log('Tab clicked To left:', tab);
  }

  onBackButtonClick() {
    console.log('Back button clicked!');
  }

  onNextButtonClick() {
    console.log('Next button clicked!');
  }
  onSubmitButtonClick() {
    console.log('Form submitted!');
  }

  sendForm() {
    console.log('Form sent!');  
  }

}
