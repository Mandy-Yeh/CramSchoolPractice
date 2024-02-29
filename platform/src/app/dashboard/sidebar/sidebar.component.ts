import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  elementUrl = '/main.js';
  items!: MenuItem[];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      { label: '首頁', icon: 'pi pi-fw pi-home' },
      { label: '學生資訊', icon: 'pi pi-fw pi-user' },
      { label: '教師資訊', icon: 'pi pi-fw pi-pencil' },
      { label: '課程資訊', icon: 'pi pi-fw pi-file' },
      { label: '其他', icon: 'pi pi-fw pi-cog' },
    ];
  }
}
