const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

let browser, page;

const data = {
    "-LxHVtajG3N1sU714pVj": {
        "author": "Spami",
        "content": "Hello, are you there?"
    },
    "-LxIDxC-GotWtf4eHwV8": {
        "author": "Garry",
        "content": "Yep, whats up :?"
    },
    "-LxIDxPfhsNipDrOQ5g_": {
        "author": "Spami",
        "content": "How are you? Long time no see? :)"
    }
}
const createData = {
    "-LxIDxC-GotWtf4eHwV8": {
        "author": "Garry",
        "content": "Yep, whats up :?",
        "_id": "3"
    },
    "-LxIDxPfhsNipDrOQ5g_": {
        "author": "Spami",
        "content": "How are you? Long time no see? :)",
        "_id": "1"
    }
}

function mockRequest(data) {
    return {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
}


describe('Test Messenger', async function () {

    this.timeout(6000);

    before(async () => { browser = await chromium.launch() });
    after(async () => { await browser.close(); });
    beforeEach(async () => { page = await browser.newPage(); });
    afterEach(async () => { await page.close(); });

    it('Initial all message from server', async () => {
        await page.goto('http://localhost:5500');

        await page.route('**/jsonstore/messenger*', (route, request) => {
            route.fulfill(mockRequest(data));
        });

        const [response] = await Promise.all([
            page.waitForResponse('**/jsonstore/messenger*'),
            page.click('#refresh')
        ]);

        const res = await response.json();

        expect(res).to.eql(data);
    });
    it('Current message in textarea', async () => {
        await page.goto('http://localhost:5500');

        await page.route('**/jsonstore/messenger*', (route, request) => {
            route.fulfill(mockRequest(data));
        });

        const [response] = await Promise.all([
            page.waitForResponse('**/jsonstore/messenger*'),
            page.click('#refresh')
        ]);

        const textArea = await page.$eval('#messages', (area) => area.value);
        const result = Object.values(data)
            .map(x => `${x.author}: ${x.content}`)
            .join('\n');


        expect(textArea).to.eql(result);
    });

    it('Send message', async () => {
        await page.goto('http://localhost:5500');
        let requestData = null;
        let expected = {
            author: 'Silvia',
            content: 'Hallo'
        }

        await page.route('**/jsonstore/messenger*', (route, request) => {
            if (request.method() === 'POST') {
                requestData = request.postData();
                route.fulfill(mockRequest(createData));
            }
        });
        await page.fill('#author', expected.author);
        await page.fill('#content', expected.content);

        const [response] = await Promise.all([
            page.waitForResponse('**/jsonstore/messenger*'),
            page.click('#submit')
        ]);

      const result = JSON.parse(requestData);    

        expect(result).to.eql(expected);
    });
});