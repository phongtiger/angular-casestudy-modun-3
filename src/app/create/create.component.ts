import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ContentService} from '../content.service';
import {IBlog} from '../i-blog';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  postList: IBlog[] = [];
  postForm: FormGroup;
  constructor(
    private postService: ContentService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.postForm = this.fb.group({
      tittle: ['', [Validators.required, Validators.minLength(10)]],
      content: ['', [Validators.required, Validators.minLength(10)]],
      image: ['', [Validators.required, Validators.minLength(10)]],
      linkYoutube: ['', [Validators.required]],
    });
  }
  onSubmit() {
    if (this.postForm.valid) {
      const {value} = this.postForm;
      this.postService.createPost(value)
        .subscribe(next => {
          this.postList.unshift(next);
          this.postForm.reset({
            tittle: '',
            content: '',
            image: '',
            linkYoutube: ''
          });
        }, error => console.log(error));
    }
  }
}
