import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
   
  constructor(private builder:FormBuilder, private toastr:ToastrService, private service:AuthService, private router: Router){

  }

  registerform=this.builder.group({
    name:this.builder.control('',Validators.required),
    id:this.builder.control('',Validators.compose([Validators.required,Validators.minLength(5)])),
    password:this.builder.control('',Validators.compose([Validators.required,Validators.minLength(4)])),
    isactive:this.builder.control(false)
  });

  proceedregisteration(){
    if (this.registerform.valid) {
      
      this.service.Proceedregister(this.registerform.value).subscribe(res => {
        this.toastr.success('Registered Successfully');
        this.router.navigate(['login']);
      });

    }else{
      this.toastr.warning('Please enter valid data');

    }
  }

}
