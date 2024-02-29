import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'platform';
  // elementUrl = '/c001.js';

  // items!: MenuItem[];

  constructor() {
    /*  document why this constructor is empty */
  }

  ngOnInit(): void {
    // this.items = [
    //   { label: '首頁', icon: 'pi pi-fw pi-home' },
    //   { label: '學生資訊', icon: 'pi pi-fw pi-user' },
    //   { label: '教師資訊', icon: 'pi pi-fw pi-pencil' },
    //   { label: '課程資訊', icon: 'pi pi-fw pi-file' },
    //   { label: '其他', icon: 'pi pi-fw pi-cog' },
    // ];
  }
}
