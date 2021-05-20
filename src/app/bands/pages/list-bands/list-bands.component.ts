import { Component, OnInit } from '@angular/core';

import { Band } from '../../interfaces/bands.interface';

import { BandsService } from '../../services/bands.service';

@Component({
  selector: 'app-list-bands',
  templateUrl: './list-bands.component.html',
  styleUrls: ['./list-bands.component.css']
})
export class ListBandsComponent implements OnInit {

  filterBand = '';
  bands: Band[] = [];

  constructor( private bandsService: BandsService ) { }

  ngOnInit(): void {
    this.getListBands();
  }

  getListBands() {
    this.bandsService.getBands()
      .subscribe( bands => this.bands = bands );
  }

  deleteBandList( id: number ) {
    this.bandsService.deleteBand( id )
      .subscribe( band => {
        this.getListBands();
      });
  }

}