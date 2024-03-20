import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GetUnitsService } from '../../services/get-units.service';
import { HttpClientModule } from '@angular/common/http';
import { Location } from 'src/app/types/location.interface';
import { FilterUnitsService } from 'src/app/services/filter-units.service';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent {
  results: Location[] = [];
  filteredResults: Location[] = [];

  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private unitService: GetUnitsService,
    private filterUnitsService: FilterUnitsService,
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: true,
    });

    this.unitService.getAllUnits().subscribe((data) => {
      this.results = data.locations;
      this.filteredResults = data.locations;
    });
  }

  /* Função para pegar os valores do formulário */

  onSubmit(): void {
    let {showClosed, hour} = this.formGroup.value

    this.filteredResults = this.filterUnitsService.filter(this.results, showClosed, hour)
  }

  /* Função que limpa os filtros */

  onClean(): void {
    this.formGroup.reset();
  }
}
