import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-assessment',
  templateUrl: './directives-assessment.component.html',
  styles: ['./directives-assessment.component.css'],
})
export class DirectivesAssessmentComponent implements OnInit {
  toggle = true;
  countArray = [];

  constructor() {}

  ngOnInit() {}
  onClickToggle() {
    this.toggle = !this.toggle;
    this.countArray.push(new Date());
  }
}
