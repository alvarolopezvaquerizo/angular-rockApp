import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Band } from '../../interfaces/bands.interface';
import { BandsService } from '../../services/bands.service';

@Component({
  selector: 'app-view-band',
  templateUrl: './view-band.component.html',
  styleUrls: ['./view-band.component.css']
})
export class ViewBandComponent implements OnInit {

  band!: Band;

  constructor(  private activatedRoute: ActivatedRoute,
                private bandsService: BandsService ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.bandsService.getBandForId(id) )
      )
      .subscribe( band => this.band = band );

  }

}