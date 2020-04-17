import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) { }

    register(credentials) {
        this.http.post("https://localhost:5001/api/account", credentials, {responseType: 'text'}).subscribe(res => {

            localStorage.setItem('token', res)
        })
    }
}