import { Component } from "@angular/core";

@Component({
  //decorator object with options
  selector: "app-root", //selector for the html browser
  templateUrl: "./app.component.html", //selector for the template view
  styleUrls: ["./app.component.css"] //selector for the style template use override for the bootstrap classes
})
export class AppComponent {
  //logic for component
  title = "ninja-course";
}
