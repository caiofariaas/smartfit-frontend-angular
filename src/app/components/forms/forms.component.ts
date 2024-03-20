import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule,  } from '@angular/forms';
import { GetUnitsService } from '../../services/get-units.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, ],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})

export class FormsComponent {

  results = [];
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder, private unitService: GetUnitsService){ }

    ngOnInit(): void{
        this.unitService.getAllUnits().subscribe(data => console.log(data));
        this.formGroup = this.formBuilder.group({
          hour: '',
          showClosed: false,
        })
    }

    /* Função para pegar os valores do formulário */

    onSubmit(): void{
      console.log(this.formGroup.value)
    }

    /* Função que limpa os filtros */

    onClean(): void{
      this.formGroup.reset()
    }
}
