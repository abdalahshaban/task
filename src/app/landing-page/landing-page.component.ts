import { Component, OnInit, Renderer2 } from '@angular/core';

declare const $: any;
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private render: Renderer2) { }

  ngOnInit() {
    $('.navbar-nav .nav-item').click(function () {
      $('.navbar-nav .nav-item.active').removeClass('active');
      $(this).addClass('active');
    })


  }


}
