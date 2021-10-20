import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "ag-grid-enterprise";
import * as agGrid from "ag-grid-community";
import ServerSideDatasource from "./Datasource";

var gridOptions = {
  columnDefs: [
    { field: 'make', minWidth: 220 },
    { field: 'model', minWidth: 200 },
    { field: 'price' },

  ],

  defaultColDef: {
    flex: 1,
    minWidth: 100,
  },

  rowModelType: 'serverSide',
  serverSideStoreType: 'partial',
  onGridReady: (params)=>{
    params.api.setServerSideDatasource(new ServerSideDatasource())
  }

};

  var gridDiv = document.querySelector('#myGrid');
  new agGrid.Grid(gridDiv, gridOptions);

