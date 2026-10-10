import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app.component';

try {
	await bootstrapApplication(AppComponent);
} catch (error: unknown) {
	console.error(error);
}