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


  cLientsImages = [
    { url: "../../assets/images/clients/client-1.png" },
    { url: "../../assets/images/clients/client-2.png" },
    { url: "../../assets/images/clients/client-3.png" },
    { url: "../../assets/images/clients/client-4.png" },
    { url: "../../assets/images/clients/client-5.png" },
    { url: "../../assets/images/clients/client-6.png" },
    { url: "../../assets/images/clients/client-7.png" },
    { url: "../../assets/images/clients/client-8.png" },
  ]


}
