import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-plot-amount-table',
  templateUrl: './plot-amount-table.component.html',
  styleUrls: ['./plot-amount-table.component.scss']
})
export class PlotAmountTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'date', 'amount'];
  dataSource = new MatTableDataSource<PlotPoint>(TEST_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PlotPoint {
  position: number;
  date: string;
  amount: string;
}

const TEST_DATA: PlotPoint[] = [
  {position: 1, date: '01/07/22', amount: '$70,000'},
  {position: 2, date: '01/14/22', amount: '$71,330'},
  {position: 3, date: '01/21/22', amount: '$70,900'},
  {position: 4, date: '01/28/22', amount: '$73,556'},
  {position: 5, date: '02/07/22', amount: '$74,538'},
  {position: 6, date: '02/14/22', amount: '$73,100'},
  {position: 7, date: '02/21/22', amount: '$74,000'},
  {position: 8, date: '02/28/22', amount: '$73,330'}
];
