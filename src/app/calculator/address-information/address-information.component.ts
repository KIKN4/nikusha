import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-information',
  templateUrl: './address-information.component.html',
  styleUrls: ['./address-information.component.scss'],
})
export class AddressInformationComponent implements OnInit {
  @Input() addressInfoForm!: FormGroup;

  private readonly fb = inject(FormBuilder);

  ngOnInit(): void {
    this.addressInfoForm = this.fb.group({
      address: ['', Validators.required],
      apartment: [''],
      city: ['', Validators.required],
      state: ['NY', Validators.required],
      zipCode: ['', Validators.required],
    });
  }
}
