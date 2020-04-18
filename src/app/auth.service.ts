import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) { }

    register(credentials) {
        this.http.post("http://localhost:63101/api/account", credentials).subscribe(res => {

            localStorage.setItem('token', res.toString())
        })
    }
}