import { Component, ViewChildren, inject, QueryList, ElementRef } from '@angular/core';
import { PatternService } from '../services/pattern.service';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
 patternService = inject(PatternService);
 emailservice = inject(EmailService);
  contactData = this.patternService.contactData;
  validation = this.patternService.validation;
 @ViewChildren("input") inputs!: QueryList<ElementRef>;

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }


  isValid(input: string, inputType: string): boolean {
    const regexPattern: RegExp = this.patternService.regexPatterns[inputType];
    return regexPattern.test(input);
  }



  userInput(event: Event, inputType: string): void { 
    
    const input = event.target as HTMLInputElement;
    this.contactData[inputType] = input.value.replaceAll("\n", "<br>");
    input.value === ""
      ? (this.validation[inputType] = null)
      : (this.validation[inputType] = this.isValid(input.value, inputType));
    Object.values(this.validation).every((val) => val === true)
      ? (this.patternService.valid = true)
      : (this.patternService.valid = false);
  }

  
  sendEmail() {
     if (Object.values(this.validation).includes(false)) {
      return;
    }
    this.emailservice.sendEmail(this.contactData);
    
  }
  checkAnyFieldNotEmpty(obj: any): boolean {
    return Object.values(obj).some(value => value !== "");
  }
  resetMailState(){
    Object.keys(this.validation).forEach(key => {
      this.validation[key] = null;
    });
    Object.keys(this.contactData).forEach(key => {
      this.contactData[key] = '';
    });
  this.patternService.valid = false;
  

  }
  resetContactSheet(){
    this.inputs.forEach(input => input.nativeElement.value = '');
    this.resetMailState();
  }

}
