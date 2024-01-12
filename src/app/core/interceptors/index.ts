import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './handler.interceptor';

export const INTERCEPTORS_PROVIDERS = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }
];
