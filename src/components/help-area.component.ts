import { Component } from '@angular/core';

import { HelpBoxComponent } from './help-box.component';

@Component({
  selector: 'app-help-area',
  imports: [HelpBoxComponent],
  styleUrl: './HelpArea.css',
  template: `
    <section data-testid="help-area" id="help-area">
      @for (item of helpItems; track item.id) {
        <app-help-box [title]="item.title" [text]="item.text" />
      }
    </section>
  `,
})
export class HelpAreaComponent {
  readonly helpItems = [
    {
      id: 'h1',
      title: 'What is Git?',
      text: 'Git is a version control system, helping you to manage your code and create code snapshots.',
    },
    {
      id: 'h2',
      title: 'What is GitHub?',
      text: 'GitHub is a company and online offering, providing you with tons of Git-related services (e.g., cloud repositories).',
    },
    {
      id: 'h3',
      title: 'What is GitHub Actions?',
      text: 'GitHub Actions is an automation service (or CI / CD service) that helps you automate repository-related workflows and processes.',
    },
  ];
}