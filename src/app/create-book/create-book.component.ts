import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  books: any =[];

  book={
    title: "",
    author: "",
    description:""
  }
  constructor(
    public router: Router,
    public service: BookService
  ) { }

  ngOnInit(): void {
  }

  createNew(): void{
    const data = {
      title: this.book.title,
      author: this.book.author,
      description: this.book.description
    };

    this.service.create(data).subscribe(
      (response) => {
        alert("Creste SUCCESS!!")
        console.log(response);
        this.router.navigateByUrl('/');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
