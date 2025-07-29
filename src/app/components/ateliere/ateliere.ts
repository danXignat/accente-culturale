import { Component, inject, OnInit, signal } from '@angular/core';
import { WorkshopService } from '../../services/workshop';
import { WorkshopModel } from '../../models/workshop';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';
import { of } from 'rxjs/internal/observable/of';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-ateliere',
  imports: [AsyncPipe],
  templateUrl: './ateliere.html',
  styleUrl: './ateliere.css'
})
export class Ateliere implements OnInit {
  private workshopService = inject(WorkshopService);
  
  workshops: WorkshopModel[] = []
  error = false;

  ngOnInit(): void {
    this.loadWorkshops();
  }

  private loadWorkshops(): void {

  }

  retry(): void {
    this.loadWorkshops();
  }
}
