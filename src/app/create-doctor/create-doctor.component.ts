import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../Doctor/doctor.service';

@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css']
})
export class CreateDoctorComponent implements OnInit {
  doctor = new Doctor() ;
  showAlert = false ;
 

  constructor(private doctorService : DoctorService) { }

  ngOnInit(): void {
  }
  saveDoctor()
  {
    this.doctorService.createDoctor(this.doctor).subscribe((response:any) =>{
      console.log(response) ;

      this.doctor= new Doctor();
      this.showAlert= true ;

    });
  }

  closeAlert()
  {
    this.showAlert= false ;
  }

}
