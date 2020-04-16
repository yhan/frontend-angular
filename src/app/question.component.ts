import { Component } from '@angular/core'
import { ApiService } from './api.service'

@Component({
    selector: 'question',
    templateUrl: './question.component.html'
})
export class QuestionComponent {

    question : any = {}

    constructor(private api: ApiService){}

    ngOnInit(){
        this.api.questionSelected.subscribe(q => this.question = q)
    }

    post(question) {
        this.api.postQuestion(question)
    }
}