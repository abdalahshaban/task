import { Component, OnInit, } from '@angular/core';
import { latLng, MapOptions, tileLayer, Map, Marker, icon, Tooltip, Popup } from 'leaflet';
import { TeamService } from '../services/team.service';
import { Testimonials } from '../models/testimonials';
declare const $: any;
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  mapOptions: MapOptions;
  map: Map;
  testimonials: Testimonials
  users: Testimonials['data']
  constructor(private teamServ: TeamService) { }

  ngOnInit() {
    $('.navbar-nav .nav-item').click(function () {
      $('.navbar-nav .nav-item.active').removeClass('active');
      $(this).addClass('active');
    });
    this.initializeMapOptions();
    this.getListOfUsers();
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


  private initializeMapOptions() {
    this.mapOptions = {
      center: latLng(29.9687234, 31.2699105),
      zoom: 15,
      layers: [
        tileLayer(
          'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            maxZoom: 18,
            attribution: 'Map data © OpenStreetMap contributors'
          })
      ],
    };
  }

  onMapReady(map: Map) {
    this.map = map;
    this.addSampleMarker();
  }

  private addSampleMarker() {
    const marker = new Marker([29.9687234, 31.2699105])
      .setIcon(
        icon({
          iconSize: [25, 41],
          iconAnchor: [10, 41],
          popupAnchor: [2, -40],
          iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
          shadowUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-shadow.png",

        }));
    var tooltip = new Tooltip({
      direction: 'center',
      permanent: true,
      opacity: 0.9,
      zoomAnimation: true,
    });

    var popup = new Popup().setLatLng([29.9687234, 31.2699105]).setContent('<p>Hello<br />This is Aphrie Company.</p>').openOn(this.map);


    tooltip.setContent("Aphrie");
    marker.bindTooltip(tooltip).openTooltip();

    marker.addEventListener('click', () => {
      marker.bindPopup(popup)
    })
    marker.addTo(this.map);
  }

  mySlideOptions = { items: 1, dots: true, nav: false };


  getListOfUsers() {
    this.teamServ.getListOfTestimonials().subscribe((users: Testimonials) => {
      this.testimonials = users
      this.users = users.data
    })
  }

}
