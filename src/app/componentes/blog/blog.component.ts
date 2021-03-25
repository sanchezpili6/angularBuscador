import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BlogService, Posts} from '../../servicios/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts:Posts[]=[];

  blog:FormGroup;

  constructor( private blogService: BlogService ) { 
    this.blog = new FormGroup({
      'nombre': new FormControl('', [Validators.required, Validators.minLength(5)]),
      'entrada': new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(30)])
    })
  }

  ngOnInit(): void {
    this.posts = this.blogService.obtienePosts();
    console.log(this.posts)
  }

  publicar(){
    console.log(this.blog.value);
  }

}
