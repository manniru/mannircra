import React, { Component } from 'react';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import {Button} from 'primereact/components/button/Button';
import jsPDF from "jspdf";
import autotable from "jspdf-autotable";

var getColumns = function () {
  return cols
};

var getData = function () {
  return rows
};

var rows;
var cols;

class FeaturePage extends Component {
    constructor() {
        super();
        this.exportpdf = this.exportpdf.bind(this);  
        this.state = {               
          mypdf: [  
            {  
               "studentName":"Md. Abdur Rahman Rafin",
               "studentGender":"Male",
               "studentDOB":"2009-12-09"
            },
            {  
               "studentName":"MD. Shakib Sadman Prodhan ",
               "studentGender":"Male",
               "studentDOB":"2009-12-07"
            }
         ]   
        }; 
    }

    
  exportpdf() {
    let doc = new jsPDF("l","mm","a4");
    doc.setFontSize(20);
    doc.autoTable(getColumns(), getData(10),
      {
        startY: 20,
       
        theme: 'grid',
        headerStyles: {
          fillColor: [105,105,105],
          overflow: 'linebreak',
          //  fontSize: 8
        },
        styles: {
          halign: 'center',
          lineColor: [0, 0, 0],
          font: "times",
          fontSize: 8
        },
       
        createdCell: function(cell, opts) {
          cell.styles.cellPadding = 1;
        },
      },
    );
    doc.save('Student  namwe.pdf');
  } 

  calculateAge(rowData, column) {

    var fromdate = new Date(rowData.studentDOB);
    if (rowData.studentDOB == null) {
      return 'N/A';

    } else {
      var todate = new Date();
      if (todate) todate = new Date(todate);
      else todate = new Date();

      var age = [], fromdate = new Date(fromdate),
        y = [todate.getFullYear(), fromdate.getFullYear()],
        ydiff = y[0] - y[1],
        m = [todate.getMonth(), fromdate.getMonth()],
        mdiff = m[0] - m[1],
        d = [todate.getDate(), fromdate.getDate()],
        ddiff = d[0] - d[1];

      if (mdiff < 0 || (mdiff === 0 && ddiff < 0))--ydiff;
      if (mdiff < 0) mdiff += 12;
      if (ddiff < 0) {
        fromdate.setMonth(m[1] + 1, 0);
        ddiff = fromdate.getDate() - d[1] + d[0];
        --mdiff;
      }
      if (ydiff > 0) age.push(ydiff + ' year' + (ydiff > 1 ? 's ' : ' '));
      if (mdiff > 0) age.push(mdiff + ' month' + (mdiff > 1 ? 's' : ''));
      if (ddiff > 0) age.push(ddiff + ' day' + (ddiff > 1 ? 's' : ''));
      if (age.length > 1) age.splice(age.length - 1, 0, ' - ');
      return age.join('');

    }
  }
render() {

    rows= this.state.mypdf;
    cols= [
      {title: "Student", dataKey: "studentName"},
      {title: "Gender", dataKey: "studentGender"}, 
      {title: "Date of birth", dataKey: "studentDOB"},
    ];

    let content = '';
    content = <div>
    <div className='ui-g ui-fluid'>
    <DataTable value={this.state.mypdf}>
        <Column field="studentName" header="Student Name" />
        <Column field="studentGender" header="Student Gender" />
        <Column field="studentDOB" header="Date Of Birth" />
        <Column field="" header="Age" style={{ width: '200px' }} body={this.calculateAge} />
    </DataTable>
    </div>
    </div>  
  return (
      <div>
          <h2>Table</h2>
    {content}
  <Button  onClick={this.exportpdf} className="exportPDF">Export to PDF</Button>
    </div>
  );
  }
}

export default FeaturePage; 