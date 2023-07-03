import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../business/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(private builder:FormBuilder, private toastr:ToastrService, private business:AuthService, private router: Router){

  }
  contactform=this.builder.group({
    name:this.builder.control('',Validators.required),
    email:this.builder.control('',Validators.compose([Validators.required,Validators.email])),
    number:this.builder.control('',Validators.compose([Validators.required,Validators.pattern("^[0-9]*$")]))
  });

  proceedregisteration(){
    if (this.contactform.valid) {
      
      this.business.Proceedregister(this.contactform.value).subscribe(res => {
        this.toastr.success('Thank you, I will be contacting you shortly');
      });

    }else{
      this.toastr.warning('Please enter valid data');

    }
  }

}
