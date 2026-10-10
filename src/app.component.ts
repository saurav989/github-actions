import { Component } from '@angular/core';

import { MainContentComponent } from './components/main-content.component';

@Component({
  selector: 'app-root',
  imports: [MainContentComponent],
  template: `
    <header>
      <div id="logo-img">
        <img src="assets/images/logo.png" alt="GitHub Actions logo" />
      </div>
      <h1>Learn &amp; Master GitHub Actions</h1>
    </header>
    <app-main-content />
  `,
})
export class AppComponent {}