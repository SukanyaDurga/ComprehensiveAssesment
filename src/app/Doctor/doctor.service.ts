import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Doctor } from '../doctor';
import { Patient } from '../patient';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor( private http:HttpClient) { }
  doctorBaseUrl= environment.API_BASE_URL_Doctor ;
  patientBaseUrl =environment.API_BASE_URL_PATIENT;
  createDoctor(doctor :Doctor)
  {
    return this.http.post(this.doctorBaseUrl +"/Doctors", doctor);
  }
  getDoctorList(){
    return this.http.get(this.doctorBaseUrl+"/Doctors" ) ;
  }
  getDropDownValues():Observable<any>{
     return this.http.get<Patient[]>(this.doctorBaseUrl+"/Doctors") ;
  }
  getDoctorById(id :number)
  {
    return this.http.get(this.doctorBaseUrl+"/Doctors"+id);
  }

  getDoctorByName(name :String)
  {
    return this.http.get(this.doctorBaseUrl+"/DoctorsByName/"+ name);
  }
   
  createPatient(patient : Patient)
  {
        return this.http.post(this.patientBaseUrl+"/Patients",patient) ;
  }
  getPatientById(patientId:number)
  {
      return this.http.get(this.patientBaseUrl+"/Patients/"+patientId );
  }
  GetPatientByDoctorName(doctorName:String)
  {
    return this.http.get(this.patientBaseUrl+"/PatientsByDoctorName/"+doctorName) ;
  }
  getPatientList(){
    return this.http.get(this.patientBaseUrl+"/Patients" ) ;
  }
  

}
