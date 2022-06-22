import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../Doctor/doctor.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-show-doctor',
  templateUrl: './show-doctor.component.html',
  styleUrls: ['./show-doctor.component.css']
})
export class ShowDoctorComponent implements OnInit {
   
  doctor!: Doctor[];
  d = new Doctor();
   patients = new Patient();
   l!: number;

  name! :String
  MyValue=false ;
  


  constructor(private route: ActivatedRoute ,  private doctorService : DoctorService) { }

  ngOnInit() {
    this.doctorService.getDoctorList().subscribe((response :any) =>
    {
      console.log(response)
      this.doctor = response ;     });
     
      

    }
    searchDoctor()
    {

      this.doctorService.getDoctorByName(this.name).subscribe((response:any) =>{
        console.log(response);
        this.d = response
        this.doctorService.GetPatientByDoctorName(response.name).subscribe((response:any) => {
          console.log(response) ;
          this.l =response

          this.MyValue=true;
          

        })
      });  
    }
  
    
  }

  



