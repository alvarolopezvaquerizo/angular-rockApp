import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Band } from '../../interfaces/bands.interface';
import { BandsService } from '../../services/bands.service';

import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-band',
  templateUrl: './new-band.component.html',
  styleUrls: ['./new-band.component.css']
})
export class NewBandComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    band_name: [ '', [ Validators.required ] ],
    photo: [ '', [ Validators.required ] ],
    description: [ '', [ Validators.required ] ],
    date: [ , [ Validators.required ] ],
    kind_of_music: [ '', [ Validators.required ] ],
    video: [ '', [ Validators.required ] ],
  });

  band: Band = {
    band_name: '',
    photo: '',
    description: '',
    date: '',
    kind_of_music: '',
    video: ''
  }

  constructor(
                private bandsService: BandsService,
                private activatedRoute: ActivatedRoute,
                private router: Router,
                private fb: FormBuilder) { }

  ngOnInit(): void {

    if ( !this.router.url.includes('edit') ) {
      return;
    }

    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.bandsService.getBandForId( id ) )
      )
      .subscribe( band => this.band = band );

  }

  save() {

    if ( this.band.band_name.trim().length === 0 ) {
      return;
    }

    if ( this.band.id ) {
      this.bandsService.updateBand( this.band );
    } else {
      this.bandsService.addBand( this.band )
        .subscribe( band => {
          this.router.navigate(['/list-bands', band.id]);
        })
    }

  }

}
