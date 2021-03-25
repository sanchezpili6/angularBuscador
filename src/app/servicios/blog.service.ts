import { Injectable } from '@angular/core'; 

@Injectable() 
export class BlogService { 

    private posts:Posts[]=[
        {
            nombre: "Pili",
            entrada: "Post de prueba"
        },
        {
            nombre: "Casco",
            entrada: "Otro post de prueba"
        }
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
    entrada: string;
}