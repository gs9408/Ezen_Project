const mybatisMapper = require('mybatis-mapper');
const DBPool = require('../helper/DBPool');

class NoticeService {
    // Mapper 파일을 불러옴
    constructor() {
        mybatisMapper.createMapper([
            './server/mappers/NoticeMapper.xml',
        ]);
    }

    // 공지 데이터를 불러옴
    async getList(params) {
        let dbcon = null;
        let data = null;

        try {
            dbcon = await DBPool.getConnection();

            let sql = mybatisMapper.getStatement('NoticeMapper', 'selectList', params);
            let [result] = await dbcon.query(sql);

            data = result;
        } catch (err) {
            throw err;
        } finally {
            if (dbcon) {dbcon.release();}
        }
        return data;
    }

    /** 전체 데이터의 숫자 조회 */
    async getCount(params) {
        let dbcon = null;
        let cnt = 0;

        try {
            dbcon = await DBPool.getConnection();

            let sql = mybatisMapper.getStatement('NoticeMapper', 'selectCountAll', params);
            let [result] = await dbcon.query(sql);

            if (result.length > 0) {
                cnt = result[0].cnt;
            }
        } catch (err) {
            throw err;
        } finally {
            if (dbcon) {dbcon.release();}
        }
        return cnt;
    }

    // 선택된 글 데이터를 불러옴
    async getItem(params) {
        let dbcon = null;
        let data = null;

        try {
            dbcon = await DBPool.getConnection();

            let sql = mybatisMapper.getStatement('NoticeMapper', 'selectItem', params);
            let [result] = await dbcon.query(sql);

            data = result[0];
        } catch (err) {
            throw err;
        } finally {
            if (dbcon) {dbcon.release();}
        }
        return data;
    }
}

module.exports = new NoticeService();