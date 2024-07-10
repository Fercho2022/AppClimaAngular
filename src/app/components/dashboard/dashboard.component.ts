import { Component } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  urlImagen= 'https://cdn-icons-png.flaticon.com/512/1116/1116453.png'
  ciudad:string='';
  query:boolean=false;
  temperatura=0;
  humedad=0;
  clima='';
  loading= false;
  viento='';
  mostrarError=false;
  provincia:string='';
  pais:string='';


constructor(private _servicioClima:ClimaService){

}
  obtenerClima(){
    this.query=false;
    this.loading=true;
    this._servicioClima.getClima(this.ciudad).subscribe(data=>{
      console.log(data);
      this.loading=false;
      this.query=true;
      this.pais=data.sys.country;

      this.humedad=data.main.humidity;
      this.temperatura=data.main.temp-273;
      this.clima=data.weather.Clouds;
      this.viento=data.wind.speed;



    }, error=>{
      console.log(error);
      this.loading=false;
      this.error();
    });


    }

    error(){
      this.mostrarError=true;
      setTimeout(()=>{
        this.mostrarError=false;
        this.ciudad='';
      }, 3000);
    }
}

