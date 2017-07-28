import { Component, OnInit, Output } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { FormBuilder, FormGroup, FormControl, Validators  } from '@angular/forms';
import 'rxjs/add/operator/map';
import { Doc } from './doc.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public myForm: FormGroup;

  constructor(private http: Http, private _fb: FormBuilder) { }
  title = 'Classified Document Processor';

  ngOnInit() {

    // define form model
    this.myForm = this._fb.group({
      keywordsToRedact: ['', [<any>Validators.required]],
      originalDocument: ['', [<any>Validators.required]],
      processedDocument: [''],
    });

  }

  save(model: Doc, isValid: boolean) {
    var url = '/docs';
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http
        .post(url, JSON.stringify(model), options)
        .subscribe(response => {
           model['processedDocument'] = response.text();
           this.myForm.patchValue({processedDocument: response.text()});
        });
  };

}
