import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  registractionform: FormGroup;
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private service: ServiceService,
    private route: Router
  ) {}
  ngOnInit(): void {
    this.registractionform = this.fb.group({
      Fname: this.fb.control('', [
        Validators.required,
        Validators.pattern('^[A-Za-z ]*$'),
      ]),
      Mname: this.fb.control('', [Validators.pattern('^[A-Za-z ]*$')]),
      Lname: this.fb.control('', [
        Validators.required,
        Validators.pattern('^[A-Za-z ]*$'),
      ]),
      Email: this.fb.control('', [Validators.required, Validators.email]),
      Mobile: this.fb.control('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern('^[0-9]*$'),
      ]),
      Address: this.fb.control('', [
        Validators.required,
        Validators.pattern('^[A-Za-z0-9/. ]*$'),
      ]),
      Address2: this.fb.control('', [Validators.pattern('^[A-Za-z0-9/. ]*$')]),
      City: this.fb.control('', [
        Validators.required,
        Validators.pattern('^[A-Za-z ]*$'),
      ]),
      State: this.fb.control('', [
        Validators.required,
        Validators.pattern('^[A-Za-z ]*$'),
      ]),
      Zip: this.fb.control('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
    });
  }

  proceed() {
    if (this.registractionform.valid) {
        this.service.ProceedRegister(this.registractionform.value).subscribe((res) => {
          this.toastr.success('Data Added Successfully');
          this.route.navigateByUrl('/landing')
        });

    } else {
      this.toastr.warning('Please Enter Valid Data');
    }
  }
  get f() {
    return this.registractionform.controls
  }
}
