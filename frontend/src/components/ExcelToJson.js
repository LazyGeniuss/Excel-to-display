import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { addDataToModel } from './jsonToBackendApi';
import { Button, Grid, TextField } from '@material-ui/core';
import DisplayInfo from './DisplayInfo';

const ExcelToJson = () => {
  const [file, setFile] = useState('');
  const [display,setDisplay] = useState(false);

  function filePathset(e) {
    e.preventDefault();
    var file = e.target.files[0];
    // console.log(file);
    setFile(file);
  }

  const addData = (data) => {
    // console.log("add_data"+data);

    addDataToModel(data).then((data) => {
      // console.log(data)
      if (data) {
        // console.log('yes');
        setFile('');
      // } else {
        // console.log('no');
      }
    });
  };

  function readFile() {
    if (file === '') {
      alert('Insert some file');
    } else {
      var f = file;

      const reader = new FileReader();
      reader.onload = (evt) => {
        const bstr = evt.target.result;
        const wb = XLSX.read(bstr, { type: 'binary' });

        wb.SheetNames.forEach(function (sheetName) {
          // console.log(sheetName);
          // var name = sheetName.toLowerCase();
          var XL_row_object = XLSX.utils.sheet_to_row_object_array(
            wb.Sheets[sheetName]
          );
          var json_object = JSON.stringify(XL_row_object);

          // console.log("json_obj"+json_object);
          addData(json_object);
        });
      };
      reader.readAsBinaryString(f);
      alert(`sheets Added Succesfully!`);
    }
  }

return (
  <div>
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <TextField type="file" id="file" onChange={(e) => filePathset(e)} />
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" onClick={() => {readFile()}}>
          Read File
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" onClick={() => setDisplay(true)}>
          Show Data
        </Button>
      </Grid>
    </Grid>
    {display && <DisplayInfo />}
  </div>
)};

export default ExcelToJson;
