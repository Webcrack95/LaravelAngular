import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sidebarHidden = false;

  constructor() { }

  ngOnInit(): void {
  }

  checkNav() {
    // console.log(this.sidebarHidden);
    const sidebar = document.querySelector('#mySidebar')!;
    const main = document.querySelector('#main')!;
    if(this.sidebarHidden) {
      this.sidebarHidden = false;
      // @ts-ignore
      sidebar.style.width = '250px';
      // @ts-ignore
      main.style.marginLeft = '250px';
    } else {
      this.sidebarHidden = true;
      // @ts-ignore
      sidebar.style.width = '60px';
      // @ts-ignore
      main.style.marginLeft = '60px';
    }
  }

  openNav() {
    const sidebar = document.querySelector('#mySidebar')!;
    const main = document.querySelector('#main')!;
    // @ts-ignore
    sidebar.style.width = '60px';
    // @ts-ignore
    main.style.marginLeft = '60px';
  }

  closeNav() {
    const sidebar = document.querySelector('#mySidebar')!;
    const main = document.querySelector('#main')!;
    // @ts-ignore
    sidebar.style.width = '250px';
    // @ts-ignore
    main.style.marginLeft = '250px';
  }
}
