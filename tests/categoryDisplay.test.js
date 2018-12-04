const Page = require('./helpers/page');

let page;

beforeEach(async () => {
  page = await Page.build();
  await page.goto('http://localhost:3000');
});

afterEach(async() => {
  await page.close();
});

test('can see product create form', async () => {
  const label = await page.getContentsOf('#new-product-label h5');

  expect(label).toEqual('Add a new product');
});

test('can see data table', async () => {
  const label = await page.getContentsOf('#table-label h5');

  expect(label).toEqual('Produce');
})

describe('When using valid inputs and saving product', async () => {
  beforeEach(async () => {
    await page.type('form .Product #Product', 'My product');
    await page.type('form .Container #Container', 'pkg');
    await page.type('form .Metric #Metric', '16oz');
    await page.type('form .Count #Count', '90');
    await page.type('form .Notes #Notes', 'notes');

    await page.click('form button');
  });

  test('product gets added to last row of table', async() => {
    await page.waitFor(2000);

    const product = await page.getContentsOf('tbody tr:last-child td:nth-child(1)');
    const container = await page.getContentsOf('tbody tr:last-child td:nth-child(2)');
    const metric = await page.getContentsOf('tbody tr:last-child td:nth-child(3)');
    const count = await page.getContentsOf('tbody tr:last-child td:nth-child(4)');
    const notes = await page.getContentsOf('tbody tr:last-child td:nth-child(5)');

    expect(product).toEqual('My product');
    expect(container).toEqual('pkg');
    expect(metric).toEqual('16oz');
    expect(count).toEqual('90');
    expect(notes).toEqual('notes');
  })
})