// const user = require("./sample");


const puppeteer = require('puppeteer');
const { title } = require("process");


const engine = (async ()  => { 
    // setting up environment 
   
    
    const browser = await puppeteer.launch({headless: true});
    var page = await browser.newPage();
    
    // await page.setRequestInterception(true);
	// pageName = "site"

    // const site_id = 'https://www.cricbuzz.com/';
    const site_id = 'https://www.cricbuzz.com/live-cricket-scores/60028/aus-vs-ind-4th-test-australia-tour-of-india-2023'

    // page = requestPage(page, "initial");
    try {
        await page.goto(site_id, { waitUntil: 'networkidle2' });
    } catch (err) {
        console.log("Unable to reach page");
    }

    // Function for clicks
    var i=0;
    var oldscore = 0, newscore = 0;
    async function run1() {
        setInterval(async () => {
            try {
				// console.log("in run");
                await page.reload();
				// oldscore = newscore
				// document.querySelector("#match_menu_container > div > div > ul > li:nth-child(1) > a > div:nth-child(2) > div.cb-hmscg-bat-txt > div > div:nth-child(2)")
                // await page.click('button.id-button-yes:nth-child(1)').catch(err => { });
                // await page.click('input.confirm:nth-child(3)').catch(err => { });
                // await page.click('#pet-page > div.id-container-profile > div.pet-page.id-container-pet.left-column > div.user-info > div.id-container-pet-info > div.id-container-confirm.tag-state-hidden > center > input').catch(err => { });
                // await page.click('#pet-page > div.id-container-profile > div.pet-page.id-container-pet.left-column > div.user-info > div.id-container-pet-info > div.id-container-confirm.tag-state-hidden > div.confirm-buttons.clearfix > input.confirm.id-button-new-price.btn.btn-buy.greenBtn').catch(err => { });
				// console.log(score);
                newscore = await page.evaluate(() => {
                    return document.querySelector("#matchCenter > div.cb-col.cb-col-67.cb-nws-lft-col.cb-comm-pg > div.ng-scope > div.cb-col.cb-col-100.cb-mini-col.cb-bg-white.cb-min-lv.ng-scope > div.cb-col-100.cb-col.cb-col-scores > div.cb-col.cb-col-67.cb-scrs-wrp > div.cb-min-bat-rw > h2").textContent;
                });
                // inner = await page.evaluate(() => {
                //     return document.querySelector("#innings_1 > div:nth-child(1)").innerText
                // });
                if(oldscore != newscore){
                    oldscore = newscore
                    console.log(newscore)
                }
				// console.log(newscore);
                // currValue = Number(currValue.replace(/[^0-9.-]+/g,""));
                // if (oldValue < currValue) {
                //     i += 1;
                //     oldValue = currValue;
                //     console.log( i + " " + currValue);
                // }
                // console.log(inner)
            } catch (err) {
                console.log("Error buying pet")
            }
        }, 3000)
    }

    run1();
})();

module.exports.engine = engine