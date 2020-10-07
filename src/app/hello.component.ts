import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<input [(ngModel)]="searchText" placeholder="Search.." class="advancedSearchTextbox">
<p></p>
<!--
<table *ngFor="let emp of customerData | grdFilter: {name: searchText, Age:searchText,  blog: searchText}; let i=index;">
  <tr>
    <td style="width: 5%;">{{i +1}}</td>
    <td style="width: 10%;">{{emp.name}}</td>
    <td style="width: 5%;">{{emp.Age}}</td>
    <td style="width: 15%;">{{emp.blog}}</td>
  </tr>
</table>
<hr/>
<table class="table table--bordered table--hover approvals-table" id="location-table">
  <thead>
    <tr>
      <th class="sortable">{{ element | titlecase }} Name <span class="sort-indicator icon-chevron-down"></span></th>
      <th class="sortable">Site <span class="sort-indicator icon-chevron-down"></span></th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <ng-container *ngFor="let el of customerData | grdFilter: {name: searchText, blog:searchText}">
      <tr>
        <td>{{el.name}}</td>
        <td>{{ getSiteNameOld(el) }}</td>
        <td>
          <a><span class="icon-trash" (click)="deleteElement(el.id, el.name)"></span></a>
        </td><td>
        <a><span class="icon-pencil" (click)="editElement(el)"></span></a>
      </td>
      </tr>
    </ng-container>
  </tbody>
</table>
<hr/>
-->
<table class="table table--bordered table--hover approvals-table" id="location-table">
  <tbody>
    <ng-container *ngFor="let loc of locations | grdFilter: {name: searchText, siteName:searchText}; let i=index">
      <tr>
        <td style="width: 5%;">{{i +1}}</td>
        <td style="width: 10%;">{{loc.name}}</td>
        <td style="width: 5%;">{{getSiteName(loc.site)}}</td>
      </tr>
    </ng-container>
  </tbody>
</table>
`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent {
  public searchText: string;
  public customerData: any;

  @Input() name: string;
  sites:any[];
  locations:any[];

  constructor() { }
  ngOnInit() {
    this.sites = [
      { 'name': 'site_1', 'id': 1},
      { 'name': 'site_2', 'id': 2},
      { 'name': 'site_3', 'id': 3},
      { 'name': 'site_4', 'id': 4},
    ];

    this.locations = [
      { 'name': 'loc_1a', 'site': 1},
      { 'name': 'loc_1b', 'site': 1},
      { 'name': 'loc_1c', 'site': 1},
      { 'name': 'loc_2a', 'site': 2},
      { 'name': 'loc_2b', 'site': 2},
      { 'name': 'loc_2c', 'site': 2},
      { 'name': 'loc_2d', 'site': 2},
      { 'name': 'loc_3a', 'site': 3},
      { 'name': 'loc_4a', 'site': 4},
    ];

    this.customerData = [
      { "name": 'Anil kumar', "Age": 34, "blog": 'https://code-view.com' },
      { "name": 'Sunil Kumar Singh', "Age": 28, "blog": 'https://code-sample.xyz' },
      { "name": 'Sushil Singh', "Age": 24, "blog": 'https://code-sample.com' },
      { "name": 'Aradhya Singh', "Age": 5, "blog": 'https://code-sample.com' },
      { "name": 'Reena Singh', "Age": 28, "blog": 'https://code-sample.com' },
      { "name": 'Alok Singh', "Age": 35, "blog": 'https://code-sample.com' },
      { "name": 'Dilip Singh', "Age": 34, "blog": 'https://code-sample.com' }];

      for(var i=0;i<this.locations.length;i++){
        this.locations[i].siteName = this.sites.find(s => s.id === this.locations[i].site).name;
      }
      //console.log(this.locations);
  }

  getSiteName(id) {
    return this.sites.find(s => s.id === id).name;
  }

    getSiteNameOld(passedObj) {
    return passedObj.blog;
  }
}
