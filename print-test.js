var printer = require("printer")
var fs = require('fs')
var path = require('path')

/* {
  getPrinters: [Function: getPrinters],
  printDirect: [Function: printDirect],
  printFile: [Function: printFile],
  getSupportedPrintFormats: [Function: getSupportedPrintFormats],
  getSupportedJobCommands: [Function: getSupportedJobCommands],
  getPrinter: [Function: getPrinter],
  getSelectedPaperSize: [Function: getSelectedPaperSize],
  getPrinterDriverOptions: [Function: getPrinterDriverOptions],
  getDefaultPrinterName: [Function: getDefaultPrinterName],
  getJob: [Function: getJob],
  setJob: [Function: setJob]
} */

const printers = printer.getPrinters()
const defaultPrinter = printer.getDefaultPrinterName()

printer.printDirect({
  data: fs.readFileSync(path.resolve('test.txt'), 'utf8'),
  type: 'text',
  printer: defaultPrinter,
  success: function (jobID) {
    console.log("sent to printer with ID: " + jobID);
    console.log({ jobId: printer.getJob(defaultPrinter, jobID) })
  },
  error: function (err) {
    console.log(err);
  }
});
