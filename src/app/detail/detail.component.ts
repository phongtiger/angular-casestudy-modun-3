import { Component, OnInit, OnDestroy } from '@angular/core';
import {IBlog} from '../i-blog';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {ContentService} from '../content.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {
  info: IBlog;
  sub: Subscription;
  constructor(private route: ActivatedRoute,
              private contentService: ContentService,
              private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.contentService.getById(id).subscribe(
      next => (this.info = next),
      error => {
        console.log(error);
        this.info = null;
      }
    );
  }
  getSrc() {
    const url = 'https://www.youtube.com/embed/' + this.info.linkYoutube;
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
