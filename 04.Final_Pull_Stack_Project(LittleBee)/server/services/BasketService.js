const mybatisMapper = require('mybatis-mapper');
const DBPool = require('../helper/DBPool');
const {RuntimeException} = require('../helper/ExceptionHelper');

class BasketService {

    /** 생성자 - Mapper 파일 로드 */
    constructor() {
        // mapper의 위치는 이 소스 파일이 아닌 프로젝트 root를 기준으로 상대경로
        mybatisMapper.createMapper([
            './server/mappers/BasketMapper.xml',
        ]);
    }

    /** 상품 목록 데이터 조회 */
    async getList(params) {
        let dbcon = null;
        let data = null;

        try {
            dbcon = await DBPool.getConnection();

            let sql = mybatisMapper.getStatement('BasketMapper', 'selectList', params);
            let [result] = await dbcon.query(sql);

            if (result.length === 0) {
                throw new RuntimeException('조회된 데이터가 없습니다.');
            }

            data = result;

        } catch (err) {
            throw err;
        } finally {
            if (dbcon) {dbcon.release();}
        }
        return data;
    }

    /** 단일 데이터 조회 */
    async getItem(params) {
        let dbcon = null;
        let data = null;

        try {
            dbcon = await DBPool.getConnection();

            let sql = mybatisMapper.getStatement('BasketMapper', 'selectItem', params);
            let [result] = await dbcon.query(sql);

            if (result.length === 0) {
                throw new RuntimeException('조회된 데이터가 없습니다.');
            }

            data = result[0];
        } catch (err) {
            throw err;
        } finally {
            if (dbcon) {dbcon.release();}
        }
        return data;
    }

    /** 상품 옵션 목록 조회 */
    async getOptList(params) {
        let dbcon = null;
        let data = null;

        try {
            dbcon = await DBPool.getConnection();

            let sql = mybatisMapper.getStatement('BasketMapper', 'selectOpt', params);
            let [result] = await dbcon.query(sql);

            if (result.length === 0) {
                throw new RuntimeException('조회된 데이터가 없습니다.');
            }

            data = result;

        } catch (err) {
            throw err;
        } finally {
            if (dbcon) {dbcon.release();}
        }
        return data;
    }

    /** 데이터를 추가하고 추가된 결과를 조회하여 리턴 */
    async addItem(params) {
        let dbcon = null;
        let data = null;

        try {
            dbcon = await DBPool.getConnection();

            let sql = mybatisMapper.getStatement('BasketMapper', 'insertItem', params);
            let [{insertId, affectedRows}] = await dbcon.query(sql);

            if (affectedRows === 0) {
                throw new RuntimeException('저장된 데이터가 없습니다.');
            }

            // 새로 저장된 데이터의 PK값을 활용하여 다시 조회
            sql = mybatisMapper.getStatement('BasketMapper', 'selectItem', {basketno: insertId});
            let [result] = await dbcon.query(sql);

            if (result.length === 0) {
                throw new RuntimeException('조회된 데이터가 없습니다.');
            }

            data = result[0];
        } catch (err) {
            throw err;
        } finally {
            if (dbcon) {dbcon.release();}
        }
        return data;
    }

    /** 데이터를 수정하고 수정된 결과를 조회하여 리턴 */
    async editItem(params) {
        let dbcon = null;
        let data = null;

        try {
            dbcon = await DBPool.getConnection();

            let sql = mybatisMapper.getStatement('BasketMapper', 'updateItem', params);
            let [{affectedRows}] = await dbcon.query(sql);

            if (affectedRows === 0) {
                throw new RuntimeException('저장된 데이터가 없습니다.');
            }

            // 새로 저장된 데이터의 PK값을 활용하여 다시 조회
            sql = mybatisMapper.getStatement('BasketMapper', 'selectItem', {basketno: params.basketno});
            let [result] = await dbcon.query(sql);

            if (result.length === 0) {
                throw new RuntimeException('저장된 데이터를 조회할 수 없습니다.');
            }

            data = result[0];
        } catch (err) {
            throw err;
        } finally {
            if (dbcon) {dbcon.release();}
        }
        return data;
    }

    /** 데이터 삭제 */
    async deleteItem(params) {
        let dbcon = null;

        try {
            dbcon = await DBPool.getConnection();

            let sql = mybatisMapper.getStatement('BasketMapper', 'deleteItem', params);
            let [{affectedRows}] = await dbcon.query(sql);

            if (affectedRows === 0) {
                throw new RuntimeException('삭제된 데이터가 없습니다.');
            }

        } catch (err) {
            throw err;
        } finally {
            if (dbcon) {dbcon.release();}
        }
    }

    /** 데이터 삭제 */
    async deleteAllItem(params) {
        let dbcon = null;

        try {
            dbcon = await DBPool.getConnection();

            let sql = mybatisMapper.getStatement('BasketMapper', 'deleteAllItem', params);
            let [{affectedRows}] = await dbcon.query(sql);

            if (affectedRows === 0) {
                throw new RuntimeException('삭제된 데이터가 없습니다.');
            }

        } catch (err) {
            throw err;
        } finally {
            if (dbcon) {dbcon.release();}
        }
    }

    /** 전체데이터 수 조회 */
    async getCount(params) {
        let dbcon = null;
        let cnt = 0;

        try {
            dbcon = await DBPool.getConnection();

            let sql = mybatisMapper.getStatement('BasketMapper', 'selectCountAll', params);
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
}

module.exports = new BasketService();