import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../Doctor/doctor.service';
import { Patient } from '../patient';


@Component({
  selector: 'app-show-patient',
  templateUrl: './show-patient.component.html',
  styleUrls: ['./show-patient.component.css']
})
export class ShowPatientComponent implements OnInit {

  constructor(private doctorService: DoctorService) { }
  p = new Patient();
  patient!: Patient[];
  id! :number
 

  ngOnInit() {
   

    
  }
  searchPatient()
  {
    this.doctorService.getPatientList().subscribe((response:any) =>
    {
      this.patient=response;
     // console.log(response) ;
   
    });
    this.doctorService.getPatientById(this.id).subscribe((response:any) =>{
    
      this.p = response
      console.log(this.p);
      if(this.id == 0)
      {
       alert("Enter Valid  Patient  Id")
      }
      

  });

}



}


