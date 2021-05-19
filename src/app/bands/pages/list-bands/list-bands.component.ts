import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Band } from '../../interfaces/bands.interface';

import { BandsService } from '../../services/bands.service';

@Component({
  selector: 'app-list-bands',
  templateUrl: './list-bands.component.html',
  styleUrls: ['./list-bands.component.css']
})
export class ListBandsComponent implements OnInit {

  bands: Band[] = [];

  constructor( private bandsService: BandsService,
               private activatedRoute: ActivatedRoute,
               private router: Router, ) { }

  ngOnInit(): void {

    this.bandsService.getBands()
      .subscribe( bands => this.bands = bands );

  }

}
