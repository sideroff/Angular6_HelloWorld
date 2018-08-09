import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})


export class PostDetailsComponent implements OnInit {

  author$: any
  post$: any

  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.post$ = params.id)
  }

  ngOnInit() {
    this.data.getPost(this.post$).subscribe((post: any) => {
      this.post$ = post

      this.data.getUser(post.id).subscribe(author => {
        this.author$ = author
      })
    })
  }
}
