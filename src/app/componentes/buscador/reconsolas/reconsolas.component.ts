import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reconsolas',
  templateUrl: './reconsolas.component.html',
  styleUrls: ['./reconsolas.component.css']
})
export class ReconsolasComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['palabrasBusqueda']);
    })
  }

}
