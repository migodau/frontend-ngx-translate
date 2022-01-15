import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend-ngx-translate';
  enjoy = 'enjoy_your_day';
  
  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('pt');
    this.translateService.use(localStorage.getItem('lang') || 'pt');
  }
}
