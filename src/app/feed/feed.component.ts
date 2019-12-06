import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl = 'https://randomuser.me/api/';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  feeds: any = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    // On récupère du contenu via une requete Http Get (10 items)
    this.http
      .get(`${apiUrl}`,
        {
          params: {
            results: '10'
          },
          observe: 'response'
        })
      .subscribe(data => {
        console.log(data)
        this.feeds = data['body']['results'];
      }, (error) => {
        console.log(error);
      });
  }

}
