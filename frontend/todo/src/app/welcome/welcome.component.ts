import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HelloWorldBean, WelcomeDataService} from '../service/data/welcome-data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = '';
  welcomeMessageFromService = '';

  // ActivatedRoute
  constructor(private route: ActivatedRoute,
              private service: WelcomeDataService) {
  }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage(): void {
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  getWelcomeMessageWithParameter(): void {
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response: any): void {
    this.welcomeMessageFromService = response.message;
    console.log(response);
    console.log(response.message);
  }

  private handleErrorResponse(error: any): void {
    console.log(error);
    console.log(error.error);
    console.log(error.message);
    this.welcomeMessageFromService = error.message;
  }
}
