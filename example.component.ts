
@Component({
  selector: 'error-404',
  templateUrl: './404-error.component.html',
  styleUrls: ['./404-error.component.scss']
})
export class ExampleComponent implements OnInit {

  constructor(private exampleService: ExampleService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.exampleService.get()
      .subscribe((link) => {
        this.exampleService = link;
      }, this.httpException);
  }

  httpException = (error) => {
    console.log(`an error occured with description: ${error}`);
  };
}
