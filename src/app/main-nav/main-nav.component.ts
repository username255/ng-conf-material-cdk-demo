import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
// import { Observable, of as observableOf } from 'rxjs';
// import { NestedTreeControl } from "@angular/cdk/tree";

// export type Classification = {
//   name: string,
//   children: Classification[],
//   newSpecies?: number
// };

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  constructor(private breakpointObserver: BreakpointObserver) {}

  // classifications: Classification[] = [
  //   {
  //     name: "Animalia",
  //     newSpecies: 5,
  //     children: [
  //       {
  //         name: "Chordata",
  //         children: [
  //           { name: "Craniata", children: [] },
  //           { name: "Tunicata", children: [] },
  //           { name: "Cephalochordata", children: [] }
  //         ]
  //       },
  //       {
  //         name: "Mollusca",
  //         children: [
  //           { name: "Gastropoda", children: [] },
  //           { name: "Bivalvia", children: [] },
  //           { name: "Cephalopoda", children: [] }
  //         ]
  //       },
  //       {
  //         name: "Artropoda",
  //         children: [
  //           { name: "Trilobita", children: [] },
  //           { name: "Crustacea", children: [] },
  //           { name: "Hexapoda", children: [] }
  //         ]
  //       }
  //     ]
  //   }, {
  //     name: "Plantae",
  //     children: [
  //       {
  //         name: "Streptobionta",
  //         children: [
  //           { name: "Klebsormidiophyceae", children: [] },
  //           { name: "Phragmoplastophyta", children: [] }
  //         ]
  //       }
  //     ]
  //   }
  // ];

  // treeControl = new NestedTreeControl<Classification>(node => observableOf(node.children));

}
