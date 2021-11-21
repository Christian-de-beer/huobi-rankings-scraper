var cron = require('node-cron')
const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;


let url = "https://www.huobi.com/en-us/grid-exchange/rank/"

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();


console.log("... Initiating ... ");

driver.get(url);

console.log("... Page loaded ... ");

cron.schedule('*/30 * * * * *', () => {
    console.clear()
    console.log("... Cron Running ... ");
    scrapeWebPage(driver)
});

seconds = 30;

// Object to use in calculating the differance... 
zksCollection = []
mxCollection = []
storjCollection = []
enjCollection = []
ltcCollection = []
zecCollection = []
htCollection = []
atomCollection = []
maticCollection = []
dashCollection = []
dotCollection = []
trxCollection = []
ontCollection = []
xrpCollection = []
eosCollection = []
xmrCollection = []
neoCollection = []
dogeCollection = []
etcCollection = []
gtCollection = []
arCollection = []


function scrapeWebPage(driver) {
    driver.navigate().refresh().then(() => {
        webPageReady(driver).then(() => {

            // Get the elements that contain the data
            var pendingElements = driver.findElements(By.className('dd-ai'))
            pendingElements.then(function (elements) {
                //console.log("Rankings detected ... ");
                for (let index = 0; index < elements.length; index++) {
                    const element = elements[index];
                    element.getText().then((content) => {
                        let contentArray = content.split("\n")

                        if (isNaN(contentArray[0])) {
                            contentArray.unshift("1")
                        }
                        switch (contentArray[1]) {
                            case ("ZKS/USDT"):
                                zksCollection.push(contentArray[6])
                                if (zksCollection.length > 1) {
                                    // Check zksCollection
                                    last = zksCollection[zksCollection.length - 1].replace("%", "")
                                    secondlast = zksCollection[zksCollection.length - 2].replace("%", "")
                                    movement = (last - secondlast) / 30;
                                    console.log("ZKS/USDT " + movement);
                                }
                                break;
                            case ("MX/USDT"):
                                mxCollection.push(contentArray[6])
                                if (mxCollection.length > 1) {
                                    // Check zksCollection
                                    last = mxCollection[mxCollection.length - 1].replace("%", "")
                                    secondlast = mxCollection[mxCollection.length - 2].replace("%", "")
                                    movement = (last - secondlast) / 30;
                                    console.log("MX/USDT " + movement);
                                }
                                break;
                            case ("STORJ/USDT"):
                                storjCollection.push(contentArray[6])
                                if (storjCollection.length > 1) {
                                    // Check zksCollection
                                    last = storjCollection[storjCollection.length - 1].replace("%", "")
                                    secondlast = storjCollection[storjCollection.length - 2].replace("%", "")
                                    movement = (last - secondlast) / 30;
                                    console.log("STORJ/USDT " + movement);
                                }
                                break;
                            case ("ENJ/USDT"):
                                enjCollection.push(contentArray[6])
                                if (enjCollection.length > 1) {
                                    // Check zksCollection
                                    last = enjCollection[enjCollection.length - 1].replace("%", "")
                                    secondlast = enjCollection[enjCollection.length - 2].replace("%", "")
                                    movement = (last - secondlast) / 30;
                                    console.log("ENJ/USDT " + movement);
                                }
                                break;
                            case ("LTC/USDT"):
                                ltcCollection.push(contentArray[6])
                                if (ltcCollection.length > 1) {
                                    // Check zksCollection
                                    last = ltcCollection[ltcCollection.length - 1].replace("%", "")
                                    secondlast = ltcCollection[ltcCollection.length - 2].replace("%", "")
                                    movement = (last - secondlast) / 30;
                                    console.log("LTC/USDT " + movement);
                                }
                                break;
                            case ("ZEC/USDT"):
                                zecCollection.push(contentArray[6])
                                if (zecCollection.length > 1) {
                                    // Check zksCollection
                                    last = zecCollection[zecCollection.length - 1].replace("%", "")
                                    secondlast = zecCollection[zecCollection.length - 2].replace("%", "")
                                    movement = (last - secondlast) / 30;
                                    console.log("ZEC/USDT " + movement);
                                }
                                break;
                            case ("HT/USDT"):
                                htCollection.push(contentArray[6])
                                if (htCollection.length > 1) {
                                    // Check zksCollection
                                    last = htCollection[htCollection.length - 1].replace("%", "")
                                    secondlast = htCollection[htCollection.length - 2].replace("%", "")
                                    movement = (last - secondlast) / 30;
                                    console.log("HT/USDT " + movement);
                                }
                                break;
                            case ("ATOM/USDT"):
                                atomCollection.push(contentArray[6])
                                if (atomCollection.length > 1) {
                                    // Check zksCollection
                                    last = atomCollection[atomCollection.length - 1].replace("%", "")
                                    secondlast = atomCollection[atomCollection.length - 2].replace("%", "")
                                    movement = (last - secondlast) / 30;
                                    console.log("ATOM/USDT " + movement);
                                }
                                break;
                            case ("MATIC/USDT"):
                                maticCollection.push(contentArray[6])
                                if (maticCollection.length > 1) {
                                    // Check zksCollection
                                    last = maticCollection[maticCollection.length - 1].replace("%", "")
                                    secondlast = maticCollection[maticCollection.length - 2].replace("%", "")
                                    movement = (last - secondlast) / 30;
                                    console.log("MATIC/USDT " + movement);
                                }
                                break;
                            case ("DASH/USDT"):
                                dashCollection.push(contentArray[6])
                                if (dashCollection.length > 1) {
                                    // Check zksCollection
                                    last = dashCollection[dashCollection.length - 1].replace("%", "")
                                    secondlast = dashCollection[dashCollection.length - 2].replace("%", "")
                                    movement = (last - secondlast) / 30;
                                    console.log("DASH/USDT " + movement);
                                }
                                break;
                            case ("DOT/USDT"):
                                dotCollection.push(contentArray[6])
                                if (dotCollection.length > 1) {
                                    // Check zksCollection
                                    last = dotCollection[dotCollection.length - 1].replace("%", "")
                                    secondlast = dotCollection[dotCollection.length - 2].replace("%", "")
                                    movement = (last - secondlast) / 30;
                                    console.log("DOT/USDT " + movement);
                                }
                                break;
                            case ("TRX/USDT"):
                                trxCollection.push(contentArray[6])
                                if (trxCollection.length > 1) {
                                    // Check zksCollection
                                    last = trxCollection[trxCollection.length - 1].replace("%", "")
                                    secondlast = trxCollection[trxCollection.length - 2].replace("%", "")
                                    movement = (last - secondlast) / 30;
                                    console.log("TRX/USDT " + movement);
                                }
                                break;
                            case ("ONT/USDT"):
                                ontCollection.push(contentArray[6])
                                if (ontCollection.length > 1) {
                                    // Check zksCollection
                                    last = ontCollection[ontCollection.length - 1].replace("%", "")
                                    secondlast = ontCollection[ontCollection.length - 2].replace("%", "")
                                    movement = (last - secondlast) / 30;
                                    console.log("ONT/USDT " + movement);
                                }
                                break;
                            case ("XRP/USDT"):
                                xrpCollection.push(contentArray[6])
                                if (xrpCollection.length > 1) {
                                    // Check zksCollection
                                    last = xrpCollection[xrpCollection.length - 1].replace("%", "")
                                    secondlast = xrpCollection[xrpCollection.length - 2].replace("%", "")
                                    movement = (last - secondlast) / 30;
                                    console.log("XRP/USDT " + movement);
                                }
                                break;
                            case ("EOS/USDT"):
                                eosCollection.push(contentArray[6])
                                if (eosCollection.length > 1) {
                                    // Check zksCollection
                                    last = eosCollection[eosCollection.length - 1].replace("%", "")
                                    secondlast = eosCollection[eosCollection.length - 2].replace("%", "")
                                    movement = (last - secondlast) / 30;
                                    console.log("EOS/USDT " + movement);
                                }
                                break;
                            case ("XMR/USDT"):
                                xmrCollection.push(contentArray[6])
                                if (xmrCollection.length > 1) {
                                    // Check zksCollection
                                    last = xmrCollection[xmrCollection.length - 1].replace("%", "")
                                    secondlast = xmrCollection[xmrCollection.length - 2].replace("%", "")
                                    movement = (last - secondlast) / 30;
                                    console.log("XMR/USDT " + movement);
                                }
                                break;
                            case ("NEO/USDT"):
                                neoCollection.push(contentArray[6])
                                if (neoCollection.length > 1) {
                                    // Check zksCollection
                                    last = neoCollection[neoCollection.length - 1].replace("%", "")
                                    secondlast = neoCollection[neoCollection.length - 2].replace("%", "")
                                    movement = (last - secondlast) / 30;
                                    console.log("NEO/USDT " + movement);
                                }
                                break;
                            case ("DOGE/USDT"):
                                dogeCollection.push(contentArray[6])
                                if (dogeCollection.length > 1) {
                                    // Check zksCollection
                                    last = dogeCollection[dogeCollection.length - 1].replace("%", "")
                                    secondlast = dogeCollection[dogeCollection.length - 2].replace("%", "")
                                    movement = (last - secondlast) / 30;
                                    console.log("DOGE/USDT " + movement);
                                }
                                break;
                            case ("ETC/USDT"):
                                etcCollection.push(contentArray[6])
                                if (etcCollection.length > 1) {
                                    // Check zksCollection
                                    last = etcCollection[etcCollection.length - 1].replace("%", "")
                                    secondlast = etcCollection[etcCollection.length - 2].replace("%", "")
                                    movement = (last - secondlast) / 30;
                                    console.log("ETC/USDT " + movement);
                                }
                                break;
                            case ("GT/USDT"):
                                gtCollection.push(contentArray[6])
                                if (gtCollection.length > 1) {
                                    // Check zksCollection
                                    last = gtCollection[gtCollection.length - 1].replace("%", "")
                                    secondlast = gtCollection[gtCollection.length - 2].replace("%", "")
                                    movement = (last - secondlast) / 30;
                                    console.log("GT/USDT " + movement);
                                }
                                break;
                            case ("AR/USDT"):
                                arCollection.push(contentArray[6])
                                if (arCollection.length > 1) {
                                    // Check arCollection
                                    last = arCollection[arCollection.length - 1].replace("%", "")
                                    secondlast = arCollection[arCollection.length - 2].replace("%", "")
                                    movement = (last - secondlast) / 30;
                                    console.log("AR/USDT " + movement);
                                }
                                break;
                            case ("TRX/USDT"):
                                trxCollection.push(contentArray[6])
                                if (trxCollection.length > 1) {
                                    // Check trxCollection
                                    last = trxCollection[trxCollection.length - 1].replace("%", "")
                                    secondlast = trxCollection[trxCollection.length - 2].replace("%", "")
                                    movement = (last - secondlast) / 30;
                                    console.log("TRX/USDT " + movement);
                                }
                                break;

                            default:
                                break;
                        }
                    })
                };

            });
        })
    })
}

async function webPageReady(driver) {
    await driver.wait(until.elementLocated(By.className('dt-ai')), 10000);
}
