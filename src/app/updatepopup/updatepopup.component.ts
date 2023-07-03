import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../business/auth.service';
import { Router } from '@angular/router'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-updatepopup',
  templateUrl: './updatepopup.component.html',
  styleUrls: ['./updatepopup.component.scss']
})
export class UpdatepopupComponent implements OnInit {
  constructor(private builder: FormBuilder, private business:AuthService, @Inject(MAT_DIALOG_DATA) public data:any,
  private toastr:ToastrService, private dialog:MatDialogRef<UpdatepopupComponent> ){

  }
  editdata:any;
  ngOnInit(): void {
    if(this.data.businesscode!=null && this.data.businesscode!=''){
      this.business.Getbycode(this.data.businesscode).subscribe((res)=>{
        this.editdata=res;
        this.updateform.setValue({name:this.editdata.name, number:this.editdata.number, email:this.editdata.email})
      });

    }
  }

  updateform=this.builder.group({
    name:this.builder.control(''),
    number:this.builder.control(''),
    email:this.builder.control('',Validators.compose([Validators.email])),
  });

  updateBusiness(){
    if(this.updateform.valid){
      this.business.Updatebusiness(this.data.businesscode, this.updateform.value).subscribe
      (res =>{
        this.toastr.success('Update succcessful');
        this.dialog.close()
      })

    }else{
      this.toastr.warning('Please do it well')

    }
  

  }

  deleteBusiness() {
      this.business.Deletebusiness(this.data.businesscode).subscribe((res) => {
        this.toastr.success('Business deleted successfully');
        this.dialog.close();
      });
    
  }
}
