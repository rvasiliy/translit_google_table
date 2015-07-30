function onOpen(e) {
  SpreadsheetApp.getUi()
  .createMenu('Транслит')
  .addItem('Выполнить', 'translate')
  .addToUi();
}

function onInstall(e) {
  onOpen(e);
}

function alert(str) { 
  Browser.msgBox(str);
}

function translate() {
  var range = SpreadsheetApp.getActiveRange();
  var translator = new TranslitHelper();
  
  // число строк в выделении
  var rows = range.getNumRows();
  // число колонок в выделении
  var cols = range.getNumColumns();
  
  for (var row = 1; row <= rows; row++) {
    for (var col = 1; col <= cols; col++) {
      var cell = range.getCell(row, col);
      var valueTranslated = translator.translate(cell.getValue());
      
      cell.setValue(valueTranslated);
    }
  }
}
