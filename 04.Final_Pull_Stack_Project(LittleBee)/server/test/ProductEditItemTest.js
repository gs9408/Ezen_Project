const DBPool = require('../helper/DBPool');
const ProductService = require('../services/ProductService');

(async () => {
    try {
        const params = { prodnum: 101, prodname: '플랭배내가운', 
        prodprice: 45000, thumbnail: 'https://agabantr6740.cdn-nhncommerce.com/data/goods/22/11/45/1000029465/register_detail_03.jpg', 
        registdate: '2023-01-06', prodinfo: 'C_B02_03.jpg', customerguide: 'f', maincategory_maincategorynum: 10, subcategory_subcategorynum : 20 };
        let result = await ProductService.editItem(params);
        console.log(result);
    } catch (e) {
        console.error(e);
    } finally {
        DBPool.close();
    }
})();