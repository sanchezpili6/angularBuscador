import { Injectable } from '@angular/core'; 

@Injectable() 
export class BlogService { 

    private posts:Posts[]=[
        
    ]
    constructor() { 
        console.log("BlogService Creado..."); 
    } 

    obtienePosts():Posts[]{
        return this.posts;
    }
}

export interface Posts{
    nombre:string;
    hora: Date;
    entrada: string;
}