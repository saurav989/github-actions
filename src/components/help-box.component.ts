import { Component, input } from '@angular/core';

@Component({
  selector: 'app-help-box',
  styleUrl: './HelpBox.css',
  template: `
    <article class="help-box">
      <h2>{{ title() }}</h2>
      <p>{{ text() }}</p>
    </article>
  `,
})
export class HelpBoxComponent {
  readonly title = input.required<string>();
  readonly text = input.required<string>();
}