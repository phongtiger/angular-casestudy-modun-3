import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IBlog} from '../i-blog';
import {ActivatedRoute, Router} from '@angular/router';
import {ContentService} from '../content.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  content: IBlog;
  data: FormGroup;
  message: string;
  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router,
              private contentService: ContentService,
              ) { }

  ngOnInit() {
    this.data = this.fb.group({
      id: '',
      tittle: '',
      content: '',
      image: '',
      linkYoutube: ''
    })
    ;
    const id = +this.route.snapshot.paramMap.get('id');
    this.contentService.getById(id).subscribe(
      next => {
        this.content = next;
        this.data.patchValue(this.content);
      },
      error => {
        this.content = null;
      }
    );
  }
  editMember() {
    this.contentService.updatePost(this.data.value).subscribe(next => {
      this.message = 'Update success';
    });
  }
}
