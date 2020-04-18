import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import {Subject} from 'rxjs'

@Injectable()
export class ApiService {

    private selectedQuestion = new Subject<any>();
    questionSelected = this.selectedQuestion.asObservable();

    private selectedQuiz = new Subject<any>();
    quizSelected = this.selectedQuiz.asObservable();

    constructor(private http: HttpClient) { }

    getQuestions(quizId : number) {
        return this.http.get(`http://localhost:63101/api/questions/${quizId}`)
    }

    getQuizzes(){
        return this.http.get('http://localhost:63101/api/quizzes')
    }

    getAllQuizzes(){
        return this.http.get('http://localhost:63101/api/quizzes/all')
    }

    createQuestion(question) {
        this.http.post('http://localhost:63101/api/questions', question).subscribe(res => {
            console.log(res)
        })
    }

    modifyQuestion(question) {
        this.http.put(`http://localhost:63101/api/questions/${question.id}`, question).subscribe(res => {
            console.log(res)
        })
    }

    createQuiz(quiz) {
        this.http.post('http://localhost:63101/api/quizzes', quiz).subscribe(res => {
            console.log(res)
        })
    }

    modifyQuiz(quiz) {
        this.http.put(`http://localhost:63101/api/quizzes/${quiz.id}`, quiz).subscribe(res => {
            console.log(res)
        })
    }

    selectQuestion(question) {
        
        // selectedQuestion is a stream
        // this line put question into the stream
        // so that all subscriber will be notified

        this.selectedQuestion.next(question)
    }

    selectQuiz(quiz){
        this.selectedQuiz.next(quiz)
    }
}