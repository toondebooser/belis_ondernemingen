import emailjs from '@emailjs/browser';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private SERVICE_ID = 'service_j7krcd8';
  private TEMPLATE_ID = 'template_9m4n4ea';
  private PUBLIC_KEY = 'nD8c0oopLsuhHOiPT';

  sendEmail(contactData: { email: string; bericht: string; onderwerp: string; telefoon: Number; }) {
    return emailjs.send(
      this.SERVICE_ID,
      this.TEMPLATE_ID,
      {
        email: contactData.email,
        bericht: contactData.bericht,
        onderwerp: contactData.onderwerp,
        telefoon: contactData.telefoon
      },
      this.PUBLIC_KEY
    );
  }
}
