import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyInfoService {

  companyServices: string []  =  [
    'Snoeien',
    'Vellen',
    'Verkoop',
    'Contact',
  ]

}
