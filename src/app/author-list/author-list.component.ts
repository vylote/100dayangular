import { Component, OnInit } from '@angular/core';
import { authors, Author } from '../authors';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {
  authors = authors;
  constructor() {}
  ngOnInit() {}

  currentAuthor = authors[0]

  onSelect(selectAuthor: Author) {
    this.currentAuthor = selectAuthor
  }
  onDelete(id : number) {
    this.authors = this.authors.filter(author => {
      return author.id != id;
    })

    if (this.currentAuthor.id === id) {
      this.currentAuthor = this.authors[0]
    }
  }
}