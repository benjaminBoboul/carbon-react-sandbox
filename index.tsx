import React, { Component } from 'react';
import { render } from 'react-dom';

import { LineChart } from "@carbon/charts-react";
import { RadarChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";
import Search20 from "@carbon/icons-react/lib/search/20";
import Notification20 from "@carbon/icons-react/lib/notification/20";
import AppSwitcher20 from "@carbon/icons-react/lib/app-switcher/20";
  import { Tag } from 'carbon-components-react';

import {
  Header,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuItem
} from "carbon-components-react/lib/components/UIShell";
import DataTable, {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow,
} from 'carbon-components-react/lib/components/DataTable';


import Hello from './Hello';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      data: [
	{
		"group": "Dataset 1",
		"date": "2019-01-01T00:00:00.000Z",
		"value": 10000
	},
	{
		"group": "Dataset 1",
		"date": "2019-01-01T05:00:00.000Z",
		"value": 12000
	},
	{
		"group": "Dataset 1",
		"date": "2019-01-01T10:00:00.000Z",
		"value": 14000
	},
	{
		"group": "Dataset 1",
		"date": "2019-01-02T00:00:00.000Z",
		"value": 25000
	},
	{
		"group": "Dataset 1",
		"date": "2019-01-02T02:00:00.000Z",
		"value": 26000
	},
	{
		"group": "Dataset 1",
		"date": "2019-01-03T00:00:00.000Z",
		"value": 10000
	},
	{
		"group": "Dataset 1",
		"date": "2019-01-03T05:00:00.000Z",
		"value": 10000
	},
	{
		"group": "Dataset 1",
		"date": "2019-01-03T10:00:00.000Z",
		"value": 12000
	},
	{
		"group": "Dataset 1",
		"date": "2019-01-05T00:00:00.000Z",
		"value": 45000
	},
	{
		"group": "Dataset 1",
		"date": "2019-01-07T00:00:00.000Z",
		"value": 49000
	},
	{
		"group": "Dataset 1",
		"date": "2019-01-07T15:00:00.000Z",
		"value": 45000
	},
	{
		"group": "Dataset 1",
		"date": "2019-01-09T00:00:00.000Z",
		"value": 50000
	},
	{
		"group": "Dataset 1",
		"date": "2019-01-09T05:00:00.000Z",
		"value": 52000
	},
	{
		"group": "Dataset 1",
		"date": "2019-01-09T15:00:00.000Z",
		"value": 55000
	},
	{
		"group": "Dataset 1",
		"date": "2019-01-10T00:00:00.000Z",
		"value": 50000
	},
	{
		"group": "Dataset 1",
		"date": "2019-01-12T00:00:00.000Z",
		"value": 65000
	},
	{
		"group": "Dataset 1",
		"date": "2019-01-13T00:00:00.000Z",
		"value": 80000
	},
	{
		"group": "Dataset 1",
		"date": "2019-01-14T10:00:00.000Z",
		"value": 85000
	},
	{
		"group": "Dataset 1",
		"date": "2019-01-15T07:00:00.000Z",
		"value": 90000
	},
	{
		"group": "Dataset 1",
		"date": "2019-01-15T18:00:00.000Z",
		"value": 70000
	},
	{
		"group": "Dataset 2",
		"date": "2019-01-01T00:00:00.000Z",
		"value": 20000
	},
	{
		"group": "Dataset 2",
		"date": "2019-01-01T03:00:00.000Z",
		"value": 22000
	},
	{
		"group": "Dataset 2",
		"date": "2019-01-01T16:00:00.000Z",
		"value": 24000
	},
	{
		"group": "Dataset 2",
		"date": "2019-01-02T00:00:00.000Z",
		"value": 35000
	},
	{
		"group": "Dataset 2",
		"date": "2019-01-02T07:00:00.000Z",
		"value": 36000
	},
	{
		"group": "Dataset 2",
		"date": "2019-01-03T00:00:00.000Z",
		"value": 20000
	},
	{
		"group": "Dataset 2",
		"date": "2019-01-03T06:00:00.000Z",
		"value": 20000
	},
	{
		"group": "Dataset 2",
		"date": "2019-01-03T18:00:00.000Z",
		"value": 22000
	},
	{
		"group": "Dataset 2",
		"date": "2019-01-05T00:00:00.000Z",
		"value": 62000
	},
	{
		"group": "Dataset 2",
		"date": "2019-01-06T00:00:00.000Z",
		"value": 52000
	},
	{
		"group": "Dataset 2",
		"date": "2019-01-07T00:00:00.000Z",
		"value": 52000
	},
	{
		"group": "Dataset 2",
		"date": "2019-01-07T15:00:00.000Z",
		"value": 52000
	},
	{
		"group": "Dataset 2",
		"date": "2019-01-09T00:00:00.000Z",
		"value": 60000
	},
	{
		"group": "Dataset 2",
		"date": "2019-01-09T05:00:00.000Z",
		"value": 62000
	},
	{
		"group": "Dataset 2",
		"date": "2019-01-09T10:00:00.000Z",
		"value": 62000
	},
	{
		"group": "Dataset 2",
		"date": "2019-01-12T00:00:00.000Z",
		"value": 65000
	},
	{
		"group": "Dataset 2",
		"date": "2019-01-14T00:00:00.000Z",
		"value": 40000
	},
	{
		"group": "Dataset 2",
		"date": "2019-01-15T05:00:00.000Z",
		"value": 45000
	},
	{
		"group": "Dataset 2",
		"date": "2019-01-15T10:00:00.000Z",
		"value": 35000
	},
	{
		"group": "Dataset 2",
		"date": "2019-01-15T18:00:00.000Z",
		"value": 30000
	}
],
options: {
	"title": "Line (dense time series)",
	"axes": {
		"bottom": {
			"title": "2019 Annual Sales Figures",
			"mapsTo": "date",
			"scaleType": "time"
		},
		"left": {
			"mapsTo": "value",
			"title": "Conversion rate",
			"scaleType": "linear"
		}
	},
	"curve": "curveMonotoneX",
	"height": "400px"
}
    };
  }

  render() {
    return (
      <div className="container">
        <Header aria-label="IBM Platform Name">
          <HeaderName href="#" prefix="IBM">
            [Platform]
          </HeaderName>
          <HeaderGlobalBar>
            <HeaderGlobalAction aria-label="Search" onClick={console.log('search click')}>
              <Search20 />
            </HeaderGlobalAction>
            <HeaderGlobalAction
              aria-label="Notifications"
              onClick={console.log('notification click')}>
              <Notification20 />
            </HeaderGlobalAction>
            <HeaderGlobalAction
              aria-label="App Switcher"
              onClick={console.log('app-switcher click')}
              tooltipAlignment="end">
              <AppSwitcher20 />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <DataTable rows={[0, 0, 0]} headers={["value"]} isSortable>
          {({ rows, headers, getHeaderProps, getRowProps, getTableProps }) => (
            <TableContainer title="DataTable" description="With sorting">
              <Table {...getTableProps()}>
                <TableHead>
                  <TableRow>
                    {headers.map((header) => (
                      <TableHeader key={header.key} {...getHeaderProps({ header })}>
                        {header.header}
                      </TableHeader>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id} {...getRowProps({ row })}>
                      {row.cells.map((cell) => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </DataTable>
        <LineChart
          data={this.state.data}
          options={this.state.options}>
        </LineChart>
        <RadarChart
          data={[
	{
		"group": "Sugar",
		"key": "London",
		"value": 25
	},
	{
		"group": "Oil",
		"key": "London",
		"value": 6
	},
	{
		"group": "Water",
		"key": "London",
		"value": 12
	},
	{
		"group": "Sugar",
		"key": "Milan",
		"value": 13
	},
	{
		"group": "Oil",
		"key": "Milan",
		"value": 6
	},
	{
		"group": "Water",
		"key": "Milan",
		"value": 28
	},
	{
		"group": "Sugar",
		"key": "Paris",
		"value": 19
	},
	{
		"group": "Oil",
		"key": "Paris",
		"value": 16
	},
	{
		"group": "Water",
		"key": "Paris",
		"value": 10
	},
	{
		"group": "Sugar",
		"key": "New York",
		"value": 11
	},
	{
		"group": "Oil",
		"key": "New York",
		"value": 18
	},
	{
		"group": "Water",
		"key": "New York",
		"value": 8
	},
	{
		"group": "Sugar",
		"key": "Sydney",
		"value": 12
	},
	{
		"group": "Oil",
		"key": "Sydney",
		"value": 16
	}
]}
          options={this.state.options}>
        </RadarChart>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
