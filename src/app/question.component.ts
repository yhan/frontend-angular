import { Component } from '@angular/core'

// decorator
@Component({
    selector: 'question',
    templateUrl: './question.component.html'
})
export class QuestionComponent {
    post() {
        console.log("test")
    }
}