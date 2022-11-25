import { Component, OnInit } from '@angular/core';
import { ModelPlan } from 'src/app/model/datos.model';
import { PlansService } from 'src/app/service/plans.service';

@Component({
  selector: 'app-search-plan',
  templateUrl: './search-plan.component.html',
  styleUrls: ['./search-plan.component.css']
})
export class SearchPlanComponent implements OnInit {

  ListRegistersPlans : ModelPlan[] = [];

  constructor(private plansService : PlansService) { }

  ngOnInit(): void {
    this.GetListPlan();
  }

  GetListPlan(){
    this.plansService.GetRegisters().subscribe((datos : ModelPlan[]) => {
      this.ListRegistersPlans = datos;
    })
  }

}
