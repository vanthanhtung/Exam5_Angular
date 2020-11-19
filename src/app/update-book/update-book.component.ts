import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

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

  update(){
    this.service.update(this.idBook,this.curentBook).subscribe(
      (response) => {
        console.log(response);
        alert("Updated!!!")
        this.router.navigateByUrl('/');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
