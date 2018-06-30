import React, { Component } from 'react';

// import SheetJSApp from './mannir/mannirexcel'
// import * as pdf from './mannir/mannirpdf'
// import * as pdf from './mannir/eportal/ikcoe_results'
import ExamResults from './mannir/eportal/examresults'
// import App1 from './mannir/demos/dsheet'
// import ComponentSheet from './mannir/demos/ComponentSheet';

class App extends Component {
  render() {
    return (
      <div>
        <ExamResults />
      </div>
    );
  }
}

export default App;
