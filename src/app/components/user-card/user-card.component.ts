import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../../interfaces/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() user: IUser;
  mapUrl: string;
  checkedWebsite: string;

  constructor() { }

  ngOnInit() {
    if (this.user) {
      this.checkedWebsite = this.user.website.includes('http') ? this.user.website : `http://${this.user.website}`;
      this.mapUrl = `https://www.google.com/maps/search/?api=1&query=${this.user.address.geo.lat},${this.user.address.geo.lng}`;
    }
  }

}
