var express = require("express");
var app = express();

app.set("view engine", "ejs");

var covidData = require("covid-usa");
var cachedStateData = covidData.stateDataCached();
var cachedCountyData = covidData.countyDataCached();

covidData.countiesByState(countiesByState => {
    console.log(countiesByState["California"])
});


app.listen(4000, function() {
    console.log("The Server Has Started!");
});