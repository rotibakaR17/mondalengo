import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  isMobile = false;
  width = window.innerWidth;
  height = window.innerHeight;
  mobileWidth  = 760;

  menus = [
    {
      nama: 'Wisata',
      deskripsi: 'deeeessskkrriiiipppppssiiii',
      expand: false
    },
    {
      nama: 'Wisata',
      deskripsi: 'deeeessskkrriiiipppppssiiii',
      expand: false
    },
    {
      nama: 'Wisata',
      deskripsi: 'deeeessskkrriiiipppppssiiii',
      expand: false
    }
  ];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.isMobile = this.width < this.mobileWidth;
  }

  expand(menu) {
    this.menus.forEach(item => {
      if (menu === item) {
        item.expand = !item.expand;
      } else {
        item.expand = false;
      }
    });
  }

  onResize(event) {
    this.width = event.target.innerWidth;
    this.height = event.target.innerHeight;
    this.isMobile = this.width < this.mobileWidth;
    console.log('aaaaaaaaa');
  }
}
