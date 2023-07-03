import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private builder:FormBuilder, private toastr:ToastrService, private service:AuthService, private router: Router){
    sessionStorage.clear();

  }

  userdata:any;

  loginform = this.builder.group({
    username:this.builder.control('',Validators.required),
    password:this.builder.control('',Validators.required)

  })

  proceedlogin(){
    if (this.loginform.valid) {
      this.service.Getbycode(this.loginform.value.username).subscribe(res =>{
        this.userdata=res;
        console.log(this.userdata);
        if(this.userdata.password === this.loginform.value.password){
          sessionStorage.setItem('username',this.userdata.id);
          this.router.navigate(['business']);

        }else{
          this.toastr.error('Invalid password')
        }

      });

    }
      
      //this.service.Proceedregister(this.registerform.value).subscribe(res => {
      //  this.toastr.success('Registered Successfully');
      //  this.router.navigate(['login']);
      //});

    //}else{
     // this.toastr.warning('Please enter valid data');

    //}
  }

}
