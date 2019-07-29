import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {

  errorMsg: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.errorMsg = this.route.snapshot.params.message;
  }

}
