import {tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse,
} from '@angular/common/http';

import {Observable} from 'rxjs';

import {ToastrService} from 'ngx-toastr';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor(public router: Router,
                public toastr: ToastrService,
    ) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(tap((res: HttpResponse<any>) => {

        }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                let message = err.error.message;

                if (err.error.hasOwnProperty('msg')) {
                    message = err.error.msg;
                }

                this.toastr.error(message.replace(/<(.|\n)*?>/g, ''));
            }
        }));
    }
}
