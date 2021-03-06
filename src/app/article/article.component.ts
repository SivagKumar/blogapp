import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../article.service';
import {Article} from '../article';

import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Array<Article>;

  constructor( private _articleService: ArticleService, private router: Router, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {

      this.activatedRoute.params.subscribe((params) => {
        const id = params['id'];

        this._articleService.getArticle(id)
          .subscribe(res => this.article = res);
      });

  }

  deleteArticle(article) {

    this._articleService.deleteArticle(article)
      .subscribe(darticle => {
        this.router.navigateByUrl('/');
      });
  }
}
