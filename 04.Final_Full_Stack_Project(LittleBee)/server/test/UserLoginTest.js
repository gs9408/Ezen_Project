const DBPool = require('../helper/DBPool');
const UserService = require('../services/UserService');

(async () => {
    try {
        const params = { userid: 'test', userpw: '123qwe!@#'};
        let result = await UserService.findUser(params);
        console.log(result);
    } catch (e) {
        console.error(e);
    } finally {
        DBPool.close();
    }
})();