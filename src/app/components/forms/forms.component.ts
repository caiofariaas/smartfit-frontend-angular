import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule,  } from '@angular/forms';


@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule,],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})

export class FormsComponent {

  results = [];
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder){
  }

    ngOnInit(): void{
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
