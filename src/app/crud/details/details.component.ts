import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  displayedColumns: string[] = ['Fname', 'Mname', 'Lname', 'Action'];
  userlist: any;
  edit: boolean=false;
  delete: boolean=false;
  constructor(private service: ServiceService, private route: Router) { }

  ngOnInit(): void {
    localStorage.removeItem('Userdata')
    this.LoadUser();
  }

  LoadUser() {
    debugger
    this.service.GetAll().subscribe(res => {
      debugger
      this.userlist = res;
    });
  }
  getdata(i: any) {
    debugger
    if (this.edit == false && this.delete == false) {
      var data = this.userlist[i]
      localStorage.setItem('Userdata', JSON.stringify(data));
      this.route.navigateByUrl('crud/details/' + i)
    }
  }
  Editdata() {
    alert("edit")
    this.edit = true
  }
  deletedata() {
    alert("delete")
    this.delete = true
  }
}
