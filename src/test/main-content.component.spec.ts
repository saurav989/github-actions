import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentComponent } from '../components/main-content.component';

describe('MainContent', () => {
  let fixture: ComponentFixture<MainContentComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MainContentComponent);
    element = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should render a button with the help area initially hidden', () => {
    const button = element.querySelector('button');

    expect(button?.textContent?.trim()).toBe('Show Help');
    expect(button?.getAttribute('aria-expanded')).toBe('false');
    expect(element.querySelector('[data-testid="help-area"]')).toBeNull();
  });

  it('should show all help items after clicking the button', () => {
    element.querySelector('button')!.click();
    fixture.detectChanges();

    expect(element.querySelector('[data-testid="help-area"]')).not.toBeNull();
    expect(element.querySelector('button')?.textContent?.trim()).toBe('Hide Help');
    expect(element.querySelector('button')?.getAttribute('aria-expanded')).toBe('true');
    expect(Array.from(element.querySelectorAll('.help-box h2'), (heading) => heading.textContent)).toEqual([
      'What is Git?',
      'What is GitHub?',
      'What is GitHub Actions?',
    ]);
  });

  it('should hide the help area after clicking the button again', () => {
    const button = element.querySelector('button')!;
    button.click();
    fixture.detectChanges();
    button.click();
    fixture.detectChanges();

    expect(element.querySelector('[data-testid="help-area"]')).toBeNull();
    expect(button.textContent?.trim()).toBe('Show Help');
    expect(button.getAttribute('aria-expanded')).toBe('false');
  });
});