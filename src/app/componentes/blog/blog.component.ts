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
    if(this.blog.valid){
      var newPost = {nombre: this.blog.get('nombre').value, hora: new Date(), entrada: this.blog.get('entrada').value}
    this.posts.push(newPost);
    console.log(this.blog.value);
    this.blog.reset('nombre')
    this.blog.reset('entrada')
    } else {
      console.log("mete un nombre y una entrada válida")
      this.validateAllFormFields(this.blog);
    }
  }

  validateAllFormFields(formGroup: FormGroup){
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if(control instanceof FormControl){
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup ){
        this.validateAllFormFields(control);
      }
    });
  }

}
