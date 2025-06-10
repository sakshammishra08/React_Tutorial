import React, { useState } from 'react';
import Papa from 'papaparse';

const CSVUploader = () => {
  const [data, setData] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      Papa.parse(file, {
        header: true, // Parse the CSV data as JSON (with keys from the first row)
        skipEmptyLines: true,
        complete: (result) => {
          setData(result.data); // Set the parsed data to state
        },
      });
    }
  };

  return (
    <div>
      <h1>CSV Uploader</h1>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      <table border="1">
        <thead>
          {data.length > 0 && (
            <tr>
              {Object.keys(data[0]).map((key, index) => (
                <th key={index}>{key}</th>
              ))}
            </tr>
          )}
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.values(row).map((value, cellIndex) => (
                <td key={cellIndex}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CSVUploader;
