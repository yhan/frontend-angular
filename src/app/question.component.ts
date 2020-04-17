import { Component } from '@angular/core'
import { ApiService } from './api.service'

@Component({
    selector: 'question',
    templateUrl: './question.component.html'
})
export class QuestionComponent {

    question : any = {}

    constructor(public api: ApiService){}

    ngOnInit(){
        this.api.questionSelected.subscribe(q => this.question = q)
    }

    create(question) {
        this.api.createQuestion(question)
    }

    modify(question){
        this.api.modifyQuestion(question)
    }
}