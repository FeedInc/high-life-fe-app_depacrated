import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-description',
  templateUrl: './profile-description.component.html',
  styleUrls: ['./profile-description.component.scss']
})
export class ProfileDescriptionComponent implements OnInit {
  @Input() nameProfile?: string;
  @Input() completeName?: string;
  @Input() nickName?: string;
  @Input() games?: Array<string>;
  @Input() biography?: string;
  @Input() heroes?: Array<string>;


  socialMediaAccounts = [
    { nameSocialMedia: 'Facebook', icon: "facebook", linked: "true" },
    { nameSocialMedia: 'TikTok', icon: "tiktok", linked: "true" },
    { nameSocialMedia: 'Reddit', icon: "reddit", linked: "true" },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
