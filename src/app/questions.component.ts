import { Component } from '@angular/core'
import { ApiService } from './api.service'

@Component({
    selector: 'questions',
    templateUrl: './questions.component.html'
})
export class QuestionsComponent {

    question = {}
    questions

    constructor(public api: ApiService){}

    get() {
        this.api.getQuestions()
    }

    ngOnInit(){
        this.api.getQuestions().subscribe(res => {
           this.questions  = res
        })
    }
}