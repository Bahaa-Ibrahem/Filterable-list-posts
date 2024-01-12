import { Component } from '@angular/core';
import { Keys } from 'src/app/core/constances/keys.const';
import { LanguageService } from 'src/app/core/services/language.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent {
  Keys = Keys;
  currentLang!: string

  constructor(private langService: LanguageService) {
    this.currentLang = langService.getCurrentLang() ?? environment.defaultLanguage
  }

  changeLanguage() {
    this.currentLang == Keys.ENGLIASH ? this.currentLang = Keys.ARABIC : this.currentLang = Keys.ENGLIASH
    this.langService.changeLanguage(this.currentLang)
  }

}
