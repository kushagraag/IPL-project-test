const puppeteer = require('puppeteer');

var page;
site_to_go = "https://www.cricbuzz.com/live-cricket-scores/60028/ind-vs-aus-4th-test-australia-tour-of-india-2023"
browser =  puppeteer.launch({headless: false});
page =  browser.newPage();

 page.setRequestInterception(true);

 console.log('Goto Site');
try {
	 page.goto(site_to_go, { waitUntil: 'networkidle2' });
} catch (err) {
	console.log("Unable to reach page");
}