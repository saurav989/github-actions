import { Component, signal } from '@angular/core';

import { HelpAreaComponent } from './help-area.component';

@Component({
  selector: 'app-main-content',
  imports: [HelpAreaComponent],
  template: `
    <main>
      <button type="button" (click)="toggleHelp()" [attr.aria-expanded]="helpVisible()">
        {{ helpVisible() ? 'Hide' : 'Show' }} Help
      </button>
      @if (helpVisible()) {
        <app-help-area />
      }
    </main>
  `,
})
export class MainContentComponent {
  readonly helpVisible = signal(false);

  toggleHelp(): void {
    this.helpVisible.update((isVisible) => !isVisible);
  }
}