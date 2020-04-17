import { Component } from '@angular/core'
import { ApiService } from './api.service'

@Component({
    selector: 'quizzes',
    templateUrl: './quizzes.component.html'
})
export class QuizzesComponent {

    quiz = {}
    quizzes

    constructor(public api: ApiService){}

    get() {
        this.api.getQuizzes()
    }

    ngOnInit(){
        this.api.getQuizzes().subscribe(res => {
           this.quizzes  = res
        })
    }
}