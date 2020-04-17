import { Component } from '@angular/core'
import { ApiService } from './api.service'
import { ActivatedRoute }  from '@angular/router'

@Component({
    selector: 'question',
    templateUrl: './question.component.html'
})
export class QuestionComponent {

    question : any = {}

    quizId: number 

    constructor(public api: ApiService, private route: ActivatedRoute){}

    ngOnInit(){
        this.quizId =   Number.parseInt(this.route.snapshot.paramMap.get('quizId'))
        console.log(this.quizId)
        this.api.questionSelected.subscribe(q => this.question = q)
    }

    create(question) {
        question.quizId = this.quizId
        this.api.createQuestion(question)
    }

    modify(question){
        this.api.modifyQuestion(question)
    }
}