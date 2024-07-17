import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingHeaderComponent } from 'app/layout/common/listing-header/listing-header.component';
import { HttpClientModule } from '@angular/common/http';
import { CompanyService } from '../company.service';
import { Subject, takeUntil } from 'rxjs';
import { Company } from '../company.interface';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-company-listing',
  standalone: true,
  imports: [CommonModule, ListingHeaderComponent,MatTableModule, HttpClientModule],
  templateUrl: './company-listing.component.html',
  styleUrls: ['./company-listing.component.scss']
})
export class CompanyListingComponent implements OnInit, OnDestroy {

  private _unsubscribeAll: Subject<void> = new Subject<void>();
  constructor(private companyService: CompanyService) { }
  companies: Company[] = [];  
  displayedColumns: string[] = ['companyName', 'companyCode', 'registrationNo', 'email', 'phone', 'address', 'status'];

  ngOnInit(): void {
    this.getCompaniesData()
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  getCompaniesData() {
    this.companyService.getCompanies().subscribe({
      next: (resp) => {
        this.companies = resp
        console.log("resp: ", resp);
      },
      error: (err) => {
        console.log("err", err);

      }
    })
  }
}
