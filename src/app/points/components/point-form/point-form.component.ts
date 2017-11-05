import { PointService } from './../../points.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-point-form',
  templateUrl: './point-form.component.html',
  styleUrls: ['./point-form.component.css']
})
export class PointFormComponent implements OnInit {
  pointsForm: FormGroup;

  constructor(private fb: FormBuilder,
              private ps: PointService) {
    this.createForm();
   }

  createForm(){
    this.pointsForm = this.fb.group({
      x_input: ['',Validators.required],
      y_input: ['',Validators.required],
    })
  }

  ngOnInit() {
  }
  
  onSubmit(){
    this.ps.addPoint(this.pointsForm.get('x_input').value,this.pointsForm.get('y_input').value);
  }
}
