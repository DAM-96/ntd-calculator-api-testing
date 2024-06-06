const reporter = require('cucumber-html-reporter');
const path = require('path');

let sourceReportFile = "cucumber_report";
let relativeSourcePath= `../results/${sourceReportFile}.json`
let relativeOutputPath = `../results/${sourceReportFile}.html`

let options = {
        theme: 'bootstrap',
        jsonFile: "",
        output: "",
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"1.0",
            "Test Environment": "STAGING",
            "Platform": "Ubuntu 24.0",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };

// Creates an HTML report out of the default Cucumber JSON report
function createReport(){
    const sourcePath = path.resolve(__dirname, relativeSourcePath);
    const outputPath = path.resolve(__dirname, relativeOutputPath);
    options.jsonFile = sourcePath;
    options.output = outputPath;
    reporter.generate(options);
}

createReport()