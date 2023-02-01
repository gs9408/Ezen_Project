const mybatisMapper = require('mybatis-mapper');
const DBPool = require('../helper/DBPool');
const {RuntimeException} = require('../helper/ExceptionHelper');

class UserService {

    /** 생성자 - Mapper 파일 로드 */
    constructor() {
        // mapper의 위치는 이 소스 파일이 아닌 프로젝트 root를 기준으로 상대경로
        mybatisMapper.createMapper([
            './server/mappers/UserMapper.xml',
        ]);
    }

    /** 로그인 정보 조회 */
    async findUser(params) {
        let dbcon = null;
        let data = null;

        try {
            dbcon = await DBPool.getConnection();

            let sql = mybatisMapper.getStatement('UserMapper', 'findIdPw', params);
            let [result] = await dbcon.query(sql);

            // if (result.length === 0) {
            //     throw new RuntimeException('아이디와 비밀번호를 다시 입력해주세요.');
            // }

            data = result[0];
        } catch (err) {
            throw err;
        } finally {
            if (dbcon) {dbcon.release();}
        }
        return data;
    }

    /** 목록 데이터 조회 */
    async getList(params) {
        let dbcon = null;
        let data = null;

        try {
            dbcon = await DBPool.getConnection();

            let sql = mybatisMapper.getStatement('UserMapper', 'selectList', params);
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

            let sql = mybatisMapper.getStatement('UserMapper', 'selectItem', params);
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

    /** 아이디 찾기 */
    async getFindId(params) {
        let dbcon = null;
        let data = null;

        try {
            dbcon = await DBPool.getConnection();

            let sql = mybatisMapper.getStatement('UserMapper', 'findId', params);
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

    /** 데이터를 추가하고 추가된 결과를 조회하여 리턴 */
    async addItem(params) {
        let dbcon = null;
        let data = null;

        try {
            dbcon = await DBPool.getConnection();

            let sql = mybatisMapper.getStatement('UserMapper', 'insertItem', params);
            let [{insertId, affectedRows}] = await dbcon.query(sql);

            if (affectedRows === 0) {
                throw new RuntimeException('저장된 데이터가 없습니다.');
            }

            // 새로 저장된 데이터의 PK값을 활용하여 다시 조회
            sql = mybatisMapper.getStatement('UserMapper', 'selectItem', {usernum: insertId});
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

            let sql = mybatisMapper.getStatement('UsertMapper', 'updateItem', params);
            let [{affectedRows}] = await dbcon.query(sql);

            if (affectedRows === 0) {
                throw new RuntimeException('저장된 데이터가 없습니다.');
            }

            // 새로 저장된 데이터의 PK값을 활용하여 다시 조회
            sql = mybatisMapper.getStatement('UsertMapper', 'selectItem', {deptno: params.deptno});
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

            let sql = mybatisMapper.getStatement('UsertMapper', 'deleteItemByDeptno', params);
            let [{affectedRows}] = await dbcon.query(sql);

            sql = mybatisMapper.getStatement('UsertMapper', 'deleteItemByDeptno', params);
            [{affectedRows}] = await dbcon.query(sql);

            sql = mybatisMapper.getStatement('UsertMapper', 'deleteItem', params);
            [{affectedRows}] = await dbcon.query(sql);

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

            let sql = mybatisMapper.getStatement('UserMapper', 'selectCountAll', params);
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

module.exports = new UserService();