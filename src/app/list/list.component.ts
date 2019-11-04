import { Component, OnInit } from '@angular/core';
import {ContentService} from '../content.service';
import {IBlog} from '../i-blog';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [ContentService]
})
export class ListComponent implements OnInit {
  output: IBlog[];
  info: IBlog;

  constructor(private contentService: ContentService) {
    this.contentService.getContents().subscribe(next => {
      this.output = next;
    });
  }
  ngOnInit() {
  }

  infoContent(i: number) {
    this.contentService.getById(i).subscribe(data => {
      this.info = data;
    });
  }

  edit(i: number) {
    this.contentService.getById(i).subscribe(data => {
      this.info = data;
    });
  }

  deleteContent(i: number) {
    this.contentService.deleteContent(i).subscribe( () => {
      this.output = this.output.filter(t => t.id !== i);
    }, this.errorHandle);
  }

  errorHandle(error: any) {
    alert('Khong thanh cong');
  }

}
