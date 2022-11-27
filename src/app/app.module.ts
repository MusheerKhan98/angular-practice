import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { BindingAssessmentComponent } from './binding-assessment/binding-assessment.component';
import { DirectivesAssessmentComponent } from './directives-assessment/directives-assessment.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    BindingAssessmentComponent,
    DirectivesAssessmentComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
