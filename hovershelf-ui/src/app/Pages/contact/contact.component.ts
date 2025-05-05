import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

import { AlertConstant } from '../../shared/constants/alertconstant';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  activeTab: string = 'tab1';
  isDropdownOpen: boolean = false;
  isSuccessMessageVisible: string = "none";
  @ViewChild('firstNameInput') firstNameInput!: ElementRef<HTMLInputElement>;
  @ViewChild('lastNameInput') lastNameInput!: ElementRef<HTMLInputElement>;
  @ViewChild('emailInput') emailInput!: ElementRef<HTMLInputElement>;
  @ViewChild('phoneInput') phoneInput!: ElementRef<HTMLInputElement>;
  selectedBudget: string = '';
  selectedBudgetValue: string = '';


  constructor() { }
  
  ngOnInit(): void {
  }

  switchTab(tab: string, event: Event) {
    event.preventDefault();
    if (tab === 'tab2' && !this.isTab1Valid()) {
      alert(AlertConstant.ALERT_TAB_1);
      return;
    }
    this.activeTab = tab;
    console.log('Tab switched to:', this.activeTab);
  }
  
  isTab1Valid(): boolean {
    return !!this.firstNameInput.nativeElement.value.trim() &&
      !!this.lastNameInput.nativeElement.value.trim() &&
      !!this.emailInput.nativeElement.validity.valid &&
      !!this.phoneInput.nativeElement.value.trim();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const dropdown = document.querySelector('.contact-form__c-dropdown');
    const target = event.target as HTMLElement;
    
    if (dropdown && !dropdown.contains(target)) {
      this.isDropdownOpen = false;
    }
  }

  selectBudget(value: string, label: string): void {
    this.selectedBudgetValue = value;
    this.selectedBudget = label;
    this.isDropdownOpen = false;
  }

  onNextButtonClick() {
    const fields = [
      this.firstNameInput.nativeElement,
      this.lastNameInput.nativeElement,
      this.emailInput.nativeElement,
      this.phoneInput.nativeElement
    ];

    let isValid = true;

    fields.forEach(field => {
      const wrapper = field.closest('.contact-form__c-field');
      if (!field.checkValidity()) {
        isValid = false;
        wrapper?.classList.add('has-error');
      } else {
        wrapper?.classList.remove('has-error');
      }
    });

    if (isValid) {
      this.switchTab('tab2', new Event('click'));
    } else {
      alert(AlertConstant.ALERT_NEXT);
    }
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  onBackButtonClick() {
    this.switchTab('tab1', new Event('click'));
  }

  sendForm(event: Event) {
    event.preventDefault();
    console.log('Form sent!');
    this.isSuccessMessageVisible = 'done';
  }
}
