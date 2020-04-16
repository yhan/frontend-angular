import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) { }

    getQuestions() {
        return this.http.get('https://localhost:5001/questions')
    }

    postQuestion(question) {
        this.http.post('https://localhost:5001/questions', question).subscribe(res => {
            console.log(res)
        })
    }
}