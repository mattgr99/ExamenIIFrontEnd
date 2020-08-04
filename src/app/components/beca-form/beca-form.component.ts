import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';
import { faTimes,faSave } from '@fortawesome/free-solid-svg-icons';
import { BecaService } from 'src/app/services/beca.service';
import { Beca } from 'src/app/models/beca';
@Component({
  selector: 'app-beca-form',
  templateUrl: './beca-form.component.html',
  styleUrls: ['./beca-form.component.css']
})
export class BecaFormComponent implements OnInit {
  faSave = faSave;
  faTimes = faTimes;
  
  form: FormGroup;  
  submitted: boolean = false;
  beca:Beca=new Beca;
  constructor(private becaService: BecaService, private formBuilder: FormBuilder ,private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        if(params['id']){
          this.becaService.retrieve(params['id']).subscribe(
            result => this.beca = result
          )
        }
      }
    );

    this.form = this.formBuilder.group({
      periodo: ['', [Validators.required]],
      cedula: ['', [Validators.required]],
      id: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      cuenta_bancaria: ['', [Validators.required]],
      tipo_beca: ['', [Validators.required]],
        
    });
  }

  get f(){
    return this.form.controls;
  }

  onSubmit() : void {

    this.submitted = true;

    if(this.form.invalid){
      console.error('Error en formulario');
      return;
    }
    this.beca.fecha=new Date().toLocaleString();
    this.becaService.save(this.beca).subscribe(
      result => {
        this.submitted = false;
        console.log(result);
        this.router.navigate(['/becas']);
      }
    );
  }

  onReset() : void {
    this.submitted = false;
    this.form.reset();
    this.beca = new Beca();
  }

}
