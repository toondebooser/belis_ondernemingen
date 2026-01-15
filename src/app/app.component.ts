import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CompanyInfoService } from '@services/company-info.service';
import { LowerCasePipe, NgForOf } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgForOf, LowerCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  companyServices = inject(CompanyInfoService);
  title = 'Belis_ondernemingen';
}
