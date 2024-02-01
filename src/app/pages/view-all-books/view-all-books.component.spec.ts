import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllBooksComponent } from './view-all-books.component';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

describe('ViewAllBooksComponent', () => {
  let component: ViewAllBooksComponent;
  let fixture: ComponentFixture<ViewAllBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAllBooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAllBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
export  class ViewAllBooksComponent implements OnInit{
  private http;
  public bookList:any={};
  constructor(private httpCliant:HttpClient){
    this.http=httpCliant;
  }
  ngOnInit(): void {
      this.loadBooks();
  }
  loadBooks(){
    this.http.get('')
  }

}
