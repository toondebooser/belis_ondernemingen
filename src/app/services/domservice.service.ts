import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DOMService {

  scrollElementToTop (classname: string){
      const contentElement = document.querySelector(classname);
  if (contentElement) {
    contentElement.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    console.error('Element with class "content" not found');
  }
  }

  getYear (){
    const year = new Date().getFullYear();
    return year ;
  }

}
