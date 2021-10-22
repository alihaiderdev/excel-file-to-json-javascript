let selectedFile;
console.log(window.XLSX);
document.getElementById('input').addEventListener('change', (event) => {
  selectedFile = event.target.files[0];
});

document.getElementById('button').addEventListener('click', () => {
  if (selectedFile) {
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(selectedFile);
    fileReader.onload = (event) => {
      let workbook = XLSX.read(event.target.result, { type: 'binary' });
      workbook.SheetNames.forEach((sheet) => {
        let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
        console.log(rowObject);
        document.getElementById('jsondata').innerHTML = JSON.stringify(rowObject, undefined, 3);
      });
    };
  }
});
