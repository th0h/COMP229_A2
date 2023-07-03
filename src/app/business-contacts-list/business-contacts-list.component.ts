import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../business/auth.service';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource} from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { UpdatepopupComponent } from '../updatepopup/updatepopup.component';

@Component({
  selector: 'app-business-contacts-list',
  templateUrl: './business-contacts-list.component.html',
  styleUrls: ['./business-contacts-list.component.scss']
})
export class BusinessContactsListComponent {

  constructor(private business:AuthService, private dialog:MatDialog){
    this.Loadbusiness();

  }
  businesslist:any;
  dataSource:any;
  @ViewChild(MatPaginator) paginator !:MatPaginator;

  Loadbusiness(){
    this.business.GetAll().subscribe((res: any) => {
      this.businesslist = res;
      this.businesslist.sort((a: any, b: any) => {
        return a.name.localeCompare(b.name);
      });
    //this.business.GetAll().subscribe(res =>{
      //this.businesslist=res;
      this.dataSource=new MatTableDataSource(this.businesslist)
      this.dataSource.paginator=this.paginator;
    })
  }

  displayedColumns: string[] = ['name', 'number', 'email', 'action'];

  UpdateBusiness(code:any){
    const popup=this.dialog.open(UpdatepopupComponent,{
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'500ms',
      width: '50%',
      data:{
        businesscode:code
      }
    });

    popup.afterClosed().subscribe(res=>{
      this.Loadbusiness();

    });
  }

  opendialog(){
    

  }

}
