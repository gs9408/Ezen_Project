const DBPool = require('../helper/DBPool');
const UserService = require('../services/UserService');

(async () => {
    try {
        const params = { username: '장옥기', userid: 'shin', userpw: '1234', useradress: 'adress', userphone: '010-1234-5678', useremail: 'abc@gmail.com', secession: 'f', signuptime: '2023-01-03'};
        let result = await UserService.addItem(params);
        console.log(result);
    } catch (e) {
        console.error(e);
    } finally {
        DBPool.close();
    }
})();