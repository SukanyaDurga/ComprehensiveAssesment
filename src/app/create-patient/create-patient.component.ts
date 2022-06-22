import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../Doctor/doctor.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

  doctor!: Doctor[];
  patient = new Patient() ;
  public listItems :Array<String> =[];
  names ! : String
  showAlert=false ;
  constructor(private doctorService : DoctorService ) { }

  ngOnInit(){
    this.doctorService.getDoctorList().subscribe((response :any) =>
    {
      console.log(response)
      this.doctor = response ;
     
  });}

  savePatient()
  {
    this.doctorService.createPatient(this.patient).subscribe((response:any) =>{
      console.log(response) ;

      this.patient= new Patient();
      this.showAlert= true ;

    });
  }

  closeAlert()
  {
    this.showAlert= false ;
  }


}



