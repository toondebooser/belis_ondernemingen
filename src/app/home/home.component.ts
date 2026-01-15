import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { DOMService } from '@services/domservice.service';
import { RouterLink } from '@angular/router';
import { LowerCasePipe, NgFor } from '@angular/common';
import { CompanyInfoService } from '@services/company-info.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, LowerCasePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  domService = inject(DOMService);
  companyServices = inject(CompanyInfoService);

  ngAfterViewInit(): void {
    this.domService.scrollElementToTop('.content')
  }
}
