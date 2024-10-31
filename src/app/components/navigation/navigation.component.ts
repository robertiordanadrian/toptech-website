import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  isScrolled = false;
  showMobileMenu = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled = scrollTop > 100;
  }

  desktopScroll(page: string) {
    const contactElement = document.getElementById(page);
    if (contactElement) {
      const offset = 120;
      const elementPosition =
        contactElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }
  mobileScroll(page: string) {
    const contactElement = document.getElementById(page);
    if (contactElement) {
      const offset = 90;
      const elementPosition =
        contactElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    this.showMobileMenu = false;
  }
  openMobileMenu() {
    this.showMobileMenu = true;
  }
  closeMobileMenu() {
    this.showMobileMenu = false;
  }
  getAQuote() {
    prompt('Please enter your quote: ');
  }
}
