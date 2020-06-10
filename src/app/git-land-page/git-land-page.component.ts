import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { GituserService } from '../gituser.service';

@Component({
  selector: 'app-git-land-page',
  templateUrl: './git-land-page.component.html',
  styleUrls: ['./git-land-page.component.css']
})
export class GitLandPageComponent implements OnInit {
  gitForm;
  repoData;
  gitUserData;
  gitFollowersData;
  followersCount;
  pageOfItems: Array<any>;
  ItemCount:number=1;

  constructor(private gituserservice:GituserService) { 

    this.gitForm = new FormGroup({
      'userName': new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }
  sendData()
  {
    if (this.gitForm.valid) {

      this.gituserservice.getgithubuserData(this.gitForm.value.userName).subscribe((data) => {
        console.log(data);
        this.gitUserData=data;
      })

      this.gituserservice.getgithubuserRepoData(this.gitForm.value.userName).subscribe((data) => {
        console.log(data);
        this.repoData=data;
       
       
        
        this.gituserservice.getgithubuserfollowerData(this.gitForm.value.userName).subscribe((data) => {
          console.log(data);
          this.gitFollowersData=data;
          this.followersCount=Object.keys(data).length          
        })

      })
    }
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}

}
