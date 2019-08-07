import { Component, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  theme: 'secondary' | 'light' = 'secondary';

  constructor(private rederer: Renderer2) { }

  ngAfterViewInit() {
  }

  onClick(theme: 'secondary' | 'light') {
    this.theme = theme;
    if (this.theme === 'secondary') {
      this.rederer.removeClass(document.body, 'bg-light');
      this.rederer.removeClass(document.body, 'text-dark');
      this.rederer.addClass(document.body, 'bg-secondary');
      this.rederer.addClass(document.body, 'text-light');
    }
    if (this.theme === 'light') {
      this.rederer.removeClass(document.body, 'bg-secondary');
      this.rederer.removeClass(document.body, 'text-light');
      this.rederer.addClass(document.body, 'bg-light');
      this.rederer.addClass(document.body, 'text-dark');
    }
  }

}
