const { now } = require('lodash');
const DBPool = require('../helper/DBPool');
const ProductService = require('../services/ProductService');

(async () => {
    try {
        const params = { prodnum: 101, prodname: '플랭배내가운', 
        prodprice: 45000, thumbnail: 'C_B02_01.jpg', 
        registdate: 'now()', prodinfo: 'C_B02_03.jpg', customerguide: 'f', maincategory_maincategorynum: 10, subcategory_subcategorynum : 20};
        let result = await ProductService.addItem(params);
        console.log(result);
    } catch (e) {
        console.error(e);
    } finally {
        DBPool.close();
    }
})();