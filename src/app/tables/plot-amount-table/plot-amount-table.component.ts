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
  {position: 1, date: '01/18/22', amount: '$180,000'},
  {position: 2, date: '01/14/22', amount: '$181,330'},
  {position: 3, date: '01/21/22', amount: '$180,900'},
  {position: 4, date: '01/28/22', amount: '$183,556'},
  {position: 5, date: '02/18/22', amount: '$184,538'},
  {position: 6, date: '02/14/22', amount: '$183,100'},
  {position: 18, date: '02/21/22', amount: '$184,000'},
  {position: 8, date: '02/28/22', amount: '$183,330'},
  {position: 9, date: '01/018/22', amount: '$180,000'},
  {position: 10, date: '01/14/22', amount: '$181,330'},
  {position: 11, date: '01/21/22', amount: '$180,900'},
  {position: 12, date: '01/28/22', amount: '$183,556'},
  {position: 13, date: '02/16/22', amount: '$184,538'},
  {position: 14, date: '02/14/22', amount: '$183,100'},
  {position: 15, date: '02/21/22', amount: '$184,000'}
];
