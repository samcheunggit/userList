import { async, inject, ComponentFixture, TestBed, fakeAsync, tick, } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsersPageComponent } from './users-page.component';
import { UserCardComponent } from '../user-card/user-card.component';
import { async as _async } from 'rxjs/scheduler/async';
import { of } from 'rxjs/observable/of';
import { AppMaterialModule } from '../../app-material/app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UsersService } from '../../services/users.service';
import { IUser } from '../../interfaces/user';

describe('UsersPageComponent', () => {
  let component: UsersPageComponent;
  let fixture: ComponentFixture<UsersPageComponent>;

  const usersServiceStub = {
    getUsers() {
      const fakeUsers = [{name: 'user1'}, {name: 'user2'}];
      return of(fakeUsers, _async);
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, AppMaterialModule, BrowserAnimationsModule ],
      providers: [ UsersService ],
      declarations: [ UsersPageComponent, UserCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onInit', () => {
    it('should call getUsers and return list of users', async(inject([UsersService], (usersService: UsersService) => {
        const result: IUser[] = [{
          name: 'user1',
          email: 'user1@email.com',
          address: {
            street: 'user1 street',
            suite: '1',
            city: 'user1 city',
            zipcode: '123',
            geo: {
              lat: 12,
              lng: 32,
            },
          },
          website: 'www.user1.com',
        }];
        spyOn(usersService, 'getUsers').and.returnValue(of(result));
        component.ngOnInit();
        fixture.detectChanges();
        expect(component.users).toEqual(result);
    })));
  });
});
