import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// let httpOptions = {
//     headers: new HttpHeaders({
//         'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
//     })
// };

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

@Injectable()
export class LoginService {
    
    constructor(
        private http: HttpClient
    )
    {
        
    }

    login(body: any): any {
        return this.http.post('http://localhost:4200/api/v1/login', body, httpOptions);
    }

    search(body: any): any {
        return this.http.post('http://localhost:4200/api/v1/search', body, httpOptions);
    }

    getApplicants(): any {
        return this.http.get('http://localhost:4200/api/v1/applicants');
    }
    
    // loginAction(userName, password): any {
    //     console.log('loginAction1 ---> ', userName + '/' + password);
    //     let body = 'userName=' + userName + '&password=' + password;

    //     return this._httpClient.post(apiURL + 'InvLoginServices/uLogin', body, httpOptions);
    // }

    // getCompanySettings(userId, companyId): any {
    //     return this._httpClient.get(apiURL + 'InvUtils/getCompanySettings/' + userId + '/' + companyId);
    // }
}
