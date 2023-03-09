import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  displayedColumns: string[] = ['Fname', 'Mname', 'Lname', 'Action'];
  userlist: any;
  delete: boolean = false;
  constructor(
    private service: ServiceService,
    private route: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    localStorage.removeItem('Userdata');
    this.LoadUser();
  }

  LoadUser() {
    debugger;
    this.service.GetAll().subscribe((res) => {
      debugger;
      this.userlist = res;
    });
  }
  getdata(i: any, V: any) {
    debugger;
    if (this.delete == false) {
      if (V == 'G') {
        var data = this.userlist[i];
        localStorage.setItem('Userdata', JSON.stringify(data));
        this.route.navigateByUrl('crud/details/' + i);
      } else {
        var data = this.userlist[i];
        localStorage.setItem('Userdata', JSON.stringify(data));
        this.route.navigateByUrl('crud/form/'+i);
      }
    }
  }
  deletedata(i: any) {
    this.delete = true;
    var data = this.userlist[i];
    this.service.deleteuser(data.id).subscribe((res) => {
      this.toastr.success('Data Deleted Successfully');
      this.LoadUser();
    });
  }
}
