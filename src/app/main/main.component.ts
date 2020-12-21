import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from '../Models/persona'
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  consulta: FormGroup

  persona: Persona

  loading: boolean = false

  dia: number
  mes: number
  year: number

  zodiaco: string

  edad:number

  constructor(private _builder: FormBuilder, private per: PersonaService) {
    this.consulta = this._builder.group({
      cedula: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]]
    })
  }

  enviar(value) {
    this.loading = true
    this.per.consultar(value).subscribe(data => {
      this.loading = false
      this.persona = data

      if (data.ok) {
        data.FechaNacimiento = data.FechaNacimiento.substring(0, 10)
        this.dia = Number(data.FechaNacimiento.substring(8, 10))
        this.mes = Number(data.FechaNacimiento.substring(5, 7))
        this.year = Number(data.FechaNacimiento.substring(0, 4))

        this.getZodiac(this.dia, this.mes)

        let currentDate = new Date()
        let day = currentDate.getDate()
        let month = currentDate.getMonth() + 1
        let year = currentDate.getFullYear()

        if (month === this.mes) {
          if (day >= this.dia) {
            this.edad = year - this.year
          }
        }else if(month > this.mes) {
          this.edad = year - this.year
        }
        else {
          this.edad = (year - this.year) - 1
        }
      }
    })
  }

  getZodiac(día:number, mes:number):void {
    if ( ( mes  ==  1  &&  día <= 20 )  ||  ( mes  ==  12  &&  día >= 22 ) )  {
      this.zodiaco = 'Capricornio' 
    }  else if  ( ( mes  ==  1  &&  día >= 21 )  ||  ( mes  ==  2  &&  día <= 18 ) )  {
      this.zodiaco =  'Acuario' ;
    }  else if ( ( mes  ==  2  &&  día >= 19 )  ||  ( mes  ==  3  &&  día <= 20 ) )  {
      this.zodiaco =  'Piscis'
    }  else if ( ( mes  ==  3  &&  día >= 21 )  ||  ( mes  ==  4  &&  día <= 20 ) )  {
      this.zodiaco =  'Aries'
    }  else if ( ( mes  ==  4  &&  día >= 21 )  ||  ( mes  ==  5  &&  día <= 20 ) )  {
      this.zodiaco =  'Tauro'
    }  else if ( ( mes  ==  5  &&  día >= 21 )  ||  ( mes  ==  6  &&  día <= 20 ) )  {
      this.zodiaco =  'Géminis'
    }  else if ( ( mes  ==  6  &&  día >= 22 )  ||  ( mes  ==  7  &&  día <= 22 ) )  {
      this.zodiaco =  'Cáncer'
    }  else if ( ( mes  ==  7  &&  día >= 23 )  ||  ( mes  ==  8  &&  día <= 23 ) )  {
      this.zodiaco =  'Leo'
    }  else if ( ( mes  ==  8  &&  día >= 24 )  ||  ( mes  ==  9  &&  día <= 23 ) )  {
      this.zodiaco =  'Virgo'
    }  else if ( ( mes  ==  9  &&  día >= 24 )  ||  ( mes  ==  10  &&  día <= 23 ) )  {
      this.zodiaco =  'Libra'
    }  else if ( ( mes  ==  10  &&  día >= 24 )  ||  ( mes  ==  11  &&  día <= 22 ) )  {
      this.zodiaco =  'Escorpion'
    }  else if ( ( mes  ==  11  &&  día >= 23 )  ||  ( mes  ==  12  &&  día <= 21 ) )  {
      this.zodiaco =  'Sagitario'
    }
  }
  
}
