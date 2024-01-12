import { Injectable, inject } from '@angular/core';
import { Keys } from '../constances/keys.const';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private translate = inject(TranslateService);

  constructor() { }

  getCurrentLang() {
    return localStorage.getItem(Keys.LANGUAGE);
  }

  changeLanguage(lang: string) {
    localStorage.setItem(Keys.LANGUAGE, lang);
    this.translate.use(lang);

    const htmlEl = document.getElementsByTagName('html')[0];
    htmlEl.setAttribute('dir', lang == Keys.ENGLIASH ? 'ltr' : 'rtl');
    htmlEl.setAttribute('lang', lang);
  }
}
