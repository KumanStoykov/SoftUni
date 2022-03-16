const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

const mockData = {
    "d953e5fb-a585-4d6b-92d3-ee90697398a0": {
        "author": "J.K.Rowling",
        "title": "Harry Potter and the Philosopher's Stone"
    },
    "d953e5fb-a585-4d6b-92d3-ee90697398a1": {
        "author": "Svetlin Nakov",
        "title": "C# Fundamentals"
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

const host = 'http://localhost:5500';

describe('Test Book Library', async function () {

    this.timeout(6000);

    let browser, page;

    before(async () => { browser = await chromium.launch() });
    after(async () => { await browser.close(); });
    beforeEach(async () => { page = await browser.newPage(); });
    afterEach(async () => { await page.close(); });

    it('Displayed all books', async () => {
        await page.route('**/jsonstore/collections/books', (route) => {
            route.fulfill(mockRequest(mockData));
        });
        await page.goto(host);


        await Promise.all([
            page.click('text=Load all books'),
            page.waitForResponse('**/jsonstore/collections/books')
        ]);

        const tableRows = await page.$$eval('tr', (tr) => tr.map(x => x.textContent.trim()));

        expect(tableRows[1]).to.contain('Harry Potter');
        expect(tableRows[1]).to.contain('Rowling');
        expect(tableRows[2]).to.contain('C# Fundamentals');
        expect(tableRows[2]).to.contain('Nakov');
    });
    it('Create book', async () => {
        await page.goto(host);

        await page.fill('form#createForm >> input[name="title"]', 'Title');
        await page.fill('form#createForm >> input[name="author"]', 'Author');

        const [request] = await Promise.all([
            page.waitForRequest(request => request.method() == 'POST'),
            page.click('form#createForm >> text=Submit')
        ]);

        const data = JSON.parse(request.postData());

        expect(data.title).to.equal('Title');
        expect(data.author).to.equal('Author');
    });

    it('Edit book', async () => {
        await page.route('**/jsonstore/collections/books', (route) => {
            route.fulfill(mockRequest(mockData));
        });
        await page.goto(host);

        await Promise.all([
            page.click('text=Load all books'),
            page.waitForResponse('**/jsonstore/collections/books')
        ]);

        await page.click('tbody >> text=Edit');

        await page.fill('form#editForm >> input[name="title"]', 'Title');
        await page.fill('form#editForm >> input[name="author"]', 'Author');

        const [request] = await Promise.all([
            page.waitForRequest(request => request.method() == 'PUT'),
            page.click('form#editForm >> text=Save')
        ]);

        const data = JSON.parse(request.postData());

        expect(data.title).to.equal('Title');
        expect(data.author).to.equal('Author');
    });
    it('Delete book', async () => {
        await page.route('**/jsonstore/collections/books', (route) => {
            route.fulfill(mockRequest(mockData));
        });
        await page.goto(host);

        await Promise.all([
            page.click('text=Load all books'),
            page.waitForResponse('**/jsonstore/collections/books')
        ]);

        //Take alert
        page.on('dialog', dialog => dialog.accept());


        //Make delete 
        await Promise.all([
            page.waitForRequest(request => request.method() == 'DELETE'),
            page.click('tbody >> text=Delete')
        ]);

        const mockDataAfterDelete = {

            "d953e5fb-a585-4d6b-92d3-ee90697398a1": {
                "author": "Svetlin Nakov",
                "title": "C# Fundamentals"
            }
        }
        //Load books after delete
        await page.route('**/jsonstore/collections/books', (route) => {
            route.fulfill(mockRequest(mockDataAfterDelete));
        });
        await Promise.all([
            page.click('text=Load all books'),
            page.waitForResponse('**/jsonstore/collections/books')
        ]);


        const tableRows = await page.$$eval('tr', (tr) => tr.map(x => x.textContent.trim()));

        expect(tableRows[1]).to.not.contain('Harry Potter');
        expect(tableRows[1]).to.not.contain('Rowling');
        expect(tableRows[1]).to.contain('C# Fundamentals');
        expect(tableRows[1]).to.contain('Nakov');

    });

});