import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { LoaderService } from '../services/loader.service';
import { AlertService } from '../services/alert.service';

@Injectable({
  providedIn: 'root',
})

export class TokenInterceptor implements HttpInterceptor {
  private readonly loader = inject(LoaderService);
  public readonly alert = inject(AlertService);

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loader.setLoading(true, request.url);
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {

        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            this.alert.error(error.error ? error.error.errorMessage ? error.error.errorMessage : '!Technical Error!' : '!Technical Error!');
          } else if (error.status === 500 || error.status === 502 || error.status === 503) {
            this.alert.error(error.error ? error.error.errorMessage ? error.error.errorMessage : '!Technical Error!' : '!Technical Error!');
          } else if (error.status === 400) {
            this.alert.error(error.error ? error.error.errorMessage ? error.error.errorMessage : '!BAD REQUEST!' : '!BAD REQUEST!');
          } else if (error.status === 404) {
            this.alert.error(error.error ? error.error.errorMessage ? error.error.errorMessage : '!METHOD NOT FOUND!' : '!METHOD NOT FOUND!');
          } else {
            this.alert.error(error.error ? error.error.errorMessage ? error.error.errorMessage : '!SYSTEM ERROR!' : '!SYSTEM ERROR!');
          }
        }

        return throwError(error);
      }),
      finalize(() => this.loader.setLoading(false, request.url))
    );
  }
}
