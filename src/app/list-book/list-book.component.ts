import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  constructor(
    public router: Router,
    private service: BookService,
    private route: ActivatedRoute
  ) {
  }

  listBook: any = [];
  currentBook = null;

  ngOnInit(): void {
    this.getAllBooks();
  }


  getAllBooks(): void {
    this.service.getAll()
    .subscribe(
      data => {
        this.listBook = data;
      },
      error => {
        console.log(error)
      }
    );
  }

  getCurrentBook(id: any): void{
    this.service.getById(id)
    .subscribe(
      data => {
        this.currentBook = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  create(){
    this.router.navigateByUrl('/create');
  }

  delete(id): void{
    this.router.navigateByUrl('/delete');
  }
}
