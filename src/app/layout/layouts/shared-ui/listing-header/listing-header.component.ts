import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AsyncPipe, CurrencyPipe, NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule, UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-listing-header',
  standalone: true,
  templateUrl: './listing-header.component.html',
  styleUrls: ['./listing-header.component.scss'],
  imports: [AsyncPipe, CurrencyPipe, NgClass, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, NgFor, MatButtonModule, NgTemplateOutlet, NgIf, MatIconModule],
})
export class ListingHeaderComponent {

  @Input() pageTitle: string;
  @Input() searchEnabled: boolean=true;
  @Input() wantAddButton: boolean=true;
  @Input() redirectButtonTitle: string;
  @Output() searchValue: EventEmitter<string> = new EventEmitter<string>();
  @Output() handleRedirectClick: EventEmitter<boolean> = new EventEmitter<boolean>();
  isLoading;
  searchInputControl: UntypedFormControl = new UntypedFormControl();
  constructor() { }

  handleRedirect() {
    this.handleRedirectClick.emit(true)
  }
}
