import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PatternService {
  
  valid = false;

  contactData: any = {
    onderwerp:"",
    email: "",
    telefoon: "",
    bericht: "",
  };

  validation: any = {
    onderwerp:null,
    email: null,
    telefoon: null,
    bericht: null,
  };

  regexPatterns: any = {
    onderwerp:/^[\w\W]+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    bericht: /^[\w\W]+$/,
    telefoon: /^(?:\+?32|0)\d{9}$/,
  };
}
