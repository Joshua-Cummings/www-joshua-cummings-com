import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

interface NavLink {
  path: string;
  label: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly name = 'Joshua Cummings'
  protected readonly title = signal('Joshua Cummings | IT Professional');
  navLinks = signal<NavLink[]>([
    { path: '/projects', label: 'View Projects' },
    { path: '/hire', label: 'Hire Me' },
    { path: '/resume', label: 'Resume' },
    { path: '/contact', label: 'Contact' }
  ]);
}
