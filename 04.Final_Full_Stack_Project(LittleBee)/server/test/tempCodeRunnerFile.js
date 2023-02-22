const DBPool = require("../helper/DBPool");
const NoticeService = require("../services/NoticeService");

(async () => {
    try {
        const params = { noticenum: '221201002' };
        let result = await NoticeService.getItem(params);
        console.log(result);
    } catch (e) {
        console.error(e);
    } finally {
        DBPool.close();
    }
})();
