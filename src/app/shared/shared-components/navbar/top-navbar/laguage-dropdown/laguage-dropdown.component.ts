import { Component, HostListener, OnInit } from '@angular/core';

export class ListItem {
  constructor(public id: number, public country_flag: string, public language: string, public country_short: string) { }
}

@Component({
  selector: 'app-laguage-dropdown',
  templateUrl: './laguage-dropdown.component.html',
  styleUrls: ['./laguage-dropdown.component.scss']
})
export class LaguageDropdownComponent implements OnInit {

  isOpen = false;
  selectedOption: ListItem | null = null;
  items: ListItem[] = [
    new ListItem(1, 'assets/images/language/english.png', 'English','Eng'),
    new ListItem(2, 'assets/images/language/mandarin.png', 'Mandarin','Man'),
    new ListItem(3, 'assets/images/language/russian.png', 'Russian','Rus'),
  ];

  constructor() { }

  ngOnInit(): void {
    this.selectedOption = this.items[0];
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  closeDropdown() {
    this.isOpen = false;
  }

  select(option: ListItem) {
    this.selectedOption = option;
    this.isOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!(event.target as HTMLElement).closest('.dropdown')) {
      this.closeDropdown();
    }
  }

}
