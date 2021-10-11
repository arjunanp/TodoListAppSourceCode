export class AppConstant 
{
    static distColumnDefs = [
        { headerName: 'Date', field: 'date', sortable: true, filter: true, width: 200 },
        { headerName: 'Confirmed', field: 'confirmed', sortable: true, filter: true, width: 200 },
        { headerName: 'Active Cases', field: 'active', sortable: true, filter: true, width: 200 },
        { headerName: 'Recoverd', field: 'recovered', sortable: true, filter: true, width: 200 },
        { headerName: 'Deaths', field: 'deceased', sortable: true, filter: true, width: 215 },
      ];
    
    static statewiseColumnDefs = [
        { headerName: 'State', field: 'state', sortable: true, width: 140 },
        // { headerName: 'Confirmed', field: 'confirmed', sortable: true, width: 130 },
        { headerName: 'Active Cases', field: 'active', sortable: true, width: 130 },
        { headerName: 'Recoverd', field: 'recovered', sortable: true, width: 130 },
        { headerName: 'Deaths', field: 'deaths', sortable: true, width: 100 },
        //{ headerName: 'Last Updated', field: 'lastupdatedtime', sortable: true, width: 160 },        
      ];
    
      static distwiseColumnDefs = [
        { headerName: 'District', field: 'disctrictName', sortable: true, filter: true, width: 140 },
       // { headerName: 'Confirmed', field: 'confirmed', sortable: true, filter: true, width: 200 },
        { headerName: 'Active Cases', field: 'active', sortable: true, filter: true, width: 150 },
        { headerName: 'Recoverd', field: 'recovered', sortable: true, filter: true, width: 130 },
        { headerName: 'Deaths', field: 'deceased', sortable: true, filter: true, width: 130 },
      ];
}