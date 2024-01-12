import { Component, HostListener, OnInit, inject } from '@angular/core';
import { LanguageService } from './core/services/language.service';
import { environment } from 'src/environments/environment';
import { LoaderService } from './core/services/loader.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @HostListener('window:offline')
  onOffline() {
    this.onlineStatus = 'Offline';
  }

  @HostListener('window:online')
  onOnline() {
    this.onlineStatus = 'Online';
  }

  onlineStatus: string;
  currentLang!: string;
  isloading = false;

  private readonly translate = inject(TranslateService);

  constructor(private langService: LanguageService, public loader: LoaderService) {
    this.onlineStatus = navigator.onLine ? 'Online' : 'Offline';
  }

  ngOnInit(): void {
    this.getCurrentLang();
    this.translate.use('en');

  }

  getCurrentLang() {
    this.currentLang = this.langService.getCurrentLang() ?? environment.defaultLanguage;
    this.langService.changeLanguage(this.currentLang);
  }

}
