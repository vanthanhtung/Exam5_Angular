import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  idBook: any;
  curentBook = null;
  book={
    title: "",
    author: "",
    description:""
  }
  constructor(
    public router: Router,
    public service: BookService,
    public route: ActivatedRoute
  ) {
    this.idBook = parseInt(this.route.snapshot.params.id);
  }

  ngOnInit(): void {
    this.getCurentBook(this.idBook);
  }

  delete(id): void{
    this.service.delete(id).subscribe(
      (response) => {
        alert("Deleted!!!");
        this.router.navigateByUrl('/');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getCurentBook(id: any): void{
    this.service.getById(id)
    .subscribe(
      data => {
        this.curentBook = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
}
