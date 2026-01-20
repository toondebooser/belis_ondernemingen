import {
  Component,
  ViewChildren,
  inject,
  QueryList,
  ElementRef,
  OnInit,
  OnDestroy,
} from "@angular/core";
import { PatternService } from "../services/pattern.service";
import { EmailService } from "../services/email.service";
import { NgIf, NgClass, NgForOf } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: "./contact.component.html",
  styleUrl: "./contact.component.css",
})
export class ContactComponent implements OnInit, OnDestroy{
  private route = inject(ActivatedRoute);   
  onderwerp: string | null = "";
  success: boolean = false;
  error: boolean = false;
  loading: boolean = false;
  message: string  = "";

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
    this.loading = true;
    this.emailservice
      .sendEmail(this.contactData)
      .then((response) => {
        this.loading = false;
        this.success = true;
        this.message = "Bericht verstuurd";
         setTimeout(() => this.resetContactSheet(), 3000);
      })
      .catch((error) => {
        this.loading = false;
        this.error = true;
        this.message = "Er ging iets mis:" + error;
      });

  }
  checkAnyFieldNotEmpty(obj: any): boolean {
    return Object.values(obj).some((value) => value !== "");
  }
  resetMailState() {
    Object.keys(this.validation).forEach((key) => {
      this.validation[key] = null;
    });
    Object.keys(this.contactData).forEach((key) => {
      this.contactData[key] = "";
    });
    this.patternService.valid = false;
  }
  resetContactSheet() {
    this.inputs.forEach((input) => (input.nativeElement.value = ""));
    this.message = "";
    this.resetMailState();
  }
  ngOnInit() {
    this.onderwerp = this.route.snapshot.queryParamMap.get('onderwerp') ?? '';
    console.log(this.onderwerp);
    
    this.onderwerp !== null ? this.contactData['onderwerp'] = this.onderwerp : null;
  }
  ngOnDestroy(): void {
    this.onderwerp= null;
  }
}
