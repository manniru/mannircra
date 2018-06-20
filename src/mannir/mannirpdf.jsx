import * as jsPDF from 'jspdf'


var doc = new jsPDF({
    orientation: 'landscape',
    unit: 'in',
    format: [4, 2]
  })
  
  doc.text('Bismillahir Rahamanir Rahim', 1, 1)
  doc.save('mannirpdf.pdf')



// var doc = new jsPDF();
// doc.text(20, 20, 'Hello world!');
// doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
// doc.addPage('a6','l');
// doc.text(20, 20, 'Do you like that?');