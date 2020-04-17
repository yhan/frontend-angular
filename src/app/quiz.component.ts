import { Component } from '@angular/core'
import { ApiService } from './api.service'

@Component({
    selector: 'quiz',
    templateUrl: './quiz.component.html'
})
export class QuizComponent {

    quiz : any = {}
    
    constructor(public api: ApiService){}

    ngOnInit(){
        this.api.quizSelected.subscribe(q => this.quiz = q)
    }

    create(quiz) {
        this.api.createQuiz(quiz)
    }

    modify(quiz){
        this.api.modifyQuiz(quiz)
    }
}