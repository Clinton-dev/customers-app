import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable,throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ICustomer, IOrder } from '../shared/interfaces';

@Injectable()
export class DataService {

  baseUrl: string = 'assets/';

  constructor() { }

  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
        const errMessage = error.error.message;
        // return Observable.throwError(errMessage);
        // Use the following instead if using lite-server
        // return Observable.throw(err.text() || 'backend server error');
    }
    // return Observable.throwError(error || 'Node.js server error');
  }
}
