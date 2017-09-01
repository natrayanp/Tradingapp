import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {



  ngOnInit() {
  }

  rForm: FormGroup;
  post: any;
  description:string = '';
  name:string = '';

  constructor(private fb: FormBuilder) { 

    this.rForm = fb.group({
      'name':[null,Validators.required],
      'description':[null,Validators.compose([Validators.required, Validators.minLength(30),Validators.maxLength(500)])]
    });
  }

  addPost(post){
    this.description= post.description;
    this.name=post.name;

  }

}
