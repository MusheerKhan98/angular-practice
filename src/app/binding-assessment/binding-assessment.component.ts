import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-assessment',
  templateUrl: './binding-assessment.component.html',
  styleUrls: ['./binding-assessment.component.css'],
})
export class BindingAssessmentComponent implements OnInit {
  username: string = '';

  constructor() {}

  ngOnInit() {}

  resetUsernameToEmpty() {
    this.username = '';
  }
}
