import React from 'react';
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import './App.css';

function App() {
  const pdfExportComponent = React.useRef(null);

  const exportPDFWithMethod = () => {
    let element = document.querySelector(".k-grid") || document.body;
    savePDF(element, {
      paperSize: "A4",
    });
  };

  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };
  return (
    <>
       <div>
      <div className="example-config">
        <button className="k-button" onClick={exportPDFWithComponent}>
          Export to PDF with component
        </button>
        &nbsp;
        <button className="k-button" onClick={exportPDFWithMethod}>
          Export to PDF with method
        </button>
      </div>

      <PDFExport ref={pdfExportComponent} paperSize="A4">
        <table>
          <tr>
            <th>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </th>
          </tr>
        </table>
      </PDFExport>
    </div>
    </>
  );
}

export default App;
