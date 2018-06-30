import jsPDF from "jspdf";

let doc = new jsPDF("P","mm","A4");

doc.setFontType('helvetica');
doc.setFontSize(12);

doc.rect(5, 20, 100, 7);

// doc.setTextColor(255, 0, 0);
doc.text(5,25, "Fullname: MUHAMMAD AUWAL AHMAD");

// doc.save("table.pdf");
// doc.autoPrint()


// doc.setDrawColor(0);
// doc.setFillColor(255, 0, 0);
// doc.rect(40, 50, 30, 12, 'FD'); //Fill and Border
// doc.setFontSize(8);
// doc.text('hello', 42, 51);



doc.output('datauri');