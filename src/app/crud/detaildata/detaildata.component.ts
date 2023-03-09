import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detaildata',
  templateUrl: './detaildata.component.html',
  styleUrls: ['./detaildata.component.css']
})
export class DetaildataComponent implements OnInit{
  detailsdata: any;

  constructor() { }

  ngOnInit(): void {
    debugger
    this.detailsdata = JSON.parse(localStorage.getItem('Userdata') || '{}');
  }

}
