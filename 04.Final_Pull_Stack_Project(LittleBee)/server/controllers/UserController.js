const express = require('express');
const logger = require('../helper/LogHelper');
const regexHelper = require('../helper/RegexHelper');
const UserService = require('../services/UserService');
const { pagenation } = require('../helper/UtilHelper');
const { ForbiddenException } = require('../helper/ExceptionHelper');

module.exports = (() => {
    const url = '/signup';
    const router = express.Router();

    // 로그인 페이지 세션 생성, 세션 불러오기, 세션 삭제 기능
    router
        .post('/login', async (req, res, next) => {
            // 프론트에서 입력된 값
            const { userid, userpw } = req.body;

            // 입력값 콘솔창에서 확인
            logger.debug('id=' + userid);
            logger.debug('pw=' + userpw);

            // 입력값을 MyBatis에 전달하기 위한 객체로 구성
            const params = {};
            if (userid && userpw) {
                params.userid = userid;
                params.userpw = userpw;
            }

            // 유효성 검사 
            try {
                regexHelper.value(userid, "아이디를 입력하세요.");
                regexHelper.value(userpw, "비밀번호를 입력하세요.");
            } catch (err) {
                return next(err);
            }

            // 유저 데이터 조회
            let login = null;

            try {
                login = await UserService.findUser(params);
            } catch (err) {
                return next(err);
            }

            // 로그인 여부 확인
            let login_ok = false;
            if (login) {
                logger.debug('로그인 성공');
                login_ok = true;

                // 세션에 DB에서 받아온 정보를 저장
                req.session.usernum = login.usernum;
                req.session.username = login.username;
                req.session.userid = login.userid;
                req.session.useradress = login.useradress;
                req.session.userphone = login.userphone;
                req.session.useremail = login.useremail;
                req.session.gender = login.gender;
                req.session.birthdate = login.birthdate;
                req.session.secession = login.secession;
                req.session.signuptime = login.signuptime;
            }

            // 로그인 확인 정보를 프론트로 보냄
            let result_msg = {};
            
            if (login_ok) {
                result_msg = { rt: 'ok' };
                res.status(200).send(result_msg);
            } else {
                result_msg = { rt: 'fail' };
                res.status(403).send(result_msg);
            }
        })
        .delete('/login', async (req, res, next) => {
            let result = 'ok';
            let code = 200;

            try {
                await req.session.destroy();
            } catch (e) {
                logger.error(e.message);
                result = e.message;
                code = 500;
            }

            const json = { rt: result };
            res.status(code).send(json);
        })
        .get('/login', (req, res, next) => {
            // 세션 정보를 json에 저장
            const user = req.session.userid;
            const my_data = {
                usernum: req.session.usernum,
                username: req.session.username,
                userid: req.session.userid,
                useradress: req.session.useradress,
                userphone: req.session.userphone,
                useremail: req.session.useremail,
                gender: req.session.gender,
                birthdate: req.session.birthdate,
                secession: req.session.secession,
                signuptime: req.session.signuptime
            };

            let result_msg = null;

            if (user !== undefined) {
                logger.debug('현재 로그인중이 맞습니다.');
                result_msg = { rt: 'ok' };
                res.status(200).send({ result_msg, my_data });
            } else {
                logger.debug('현재 로그인중이 아닙니다.');
                result_msg = { rt: 'fail' };
                res.status(403).send(result_msg);
            }
        });

    /** 전체목록 조회 --> Read(SELECT) */
    router.get(url, async (req, res, next) => {
        const { userid } = req.query;

        console.log(req.query.userid);

        // 데이터 조회
        let json = null;

        try {
            json = await UserService.getList({
                userid: userid
            });
        } catch (err) {
            return next(err);
        }

        res.sendResult({ data: json });
    });

    /** 단일행 조회 --> Read(SELECT) */
    router.get(`${url}/:deptno`, async (req, res, next) => {
        // 파라미터 받기
        const { deptno } = req.params;

        // 파라미터 유효성 검사 
        try {
            regexHelper.value(deptno, '학과번호가 없습니다.');
            regexHelper.num(deptno, '학과번호는 숫자형식입니다.');
        } catch (err) {
            return next(err);
        }

        // 데이터 조회
        let json = null;

        try {
            json = await UserService.getItem({
                deptno: deptno
            });
        } catch (err) {
            return next(err);
        }

        res.sendResult({ data: json });
    });

    /** 아이디 찾기 */
    router.get(`/login/findid`, async (req, res, next) => {
        // 파라미터 받기
        const { username, useremail } = req.query;

        // 유효성 검사 
        try {
            regexHelper.value(username, '이름을 입력해주세요.');
            regexHelper.value(useremail, '이메일을 입력해주세요.');
        } catch (err) {
            return next(err);
        }

        // 데이터 조회
        let json = null;

        try {
            json = await UserService.getFindId({
                username: username,
                useremail: useremail,
            });
        } catch (err) {
            return next(err);
        }
        res.sendResult({ data: json });
        console.log(json);
    });

    /** 회원가입 --> Create(INSERT) */
    router.post(url, async (req, res, next) => {
        // 파라미터 받기
        const { username, userid, userpw, useraddress, userphone, useremail, gender, birthdate } = req.body
    
        try {
            regexHelper.value(username, '이름을 입력해주세요.');
            regexHelper.value(userid, '아이디를 입력해주세요.');
            regexHelper.value(userpw, '비밀번호를 입력해주세요.');
            regexHelper.value(useraddress, '주소를 입력해주세요.');
            regexHelper.value(userphone, '번호를 입력해주세요.');
            regexHelper.value(useremail, '이메일을 입력해주세요.');
        } catch (err) {
            return next(err);
        }

        // 데이터 저장
        let json = null;

        try {
            json = await UserService.addItem({
                username: username,
                userid: userid,
                userpw: userpw,
                useraddress: useraddress,
                userphone: userphone,
                useremail: useremail,
                gender: gender || null,
                birthdate: birthdate || null
            });
        } catch (err) {
            return next(err);
        }

        res.sendResult({ data: json });
    });

    /** 데이터 수정 --> Update(UPDATE) */
    router.put(`${url}/:deptno`, async (req, res, next) => {
        // 파라미터 받기
        const { deptno } = req.params;
        const { dname, loc } = req.body;

        // 유효성검사
        try {
            regexHelper.value(deptno, '학과번호가 없습니다.');
            regexHelper.num(deptno, '학과번호는 숫자형식만 가능합니다.');
            regexHelper.value(dname, '학과이름이 없습니다.');
            regexHelper.maxLength(dname, 20, '학과이름은 최대 20자까지 입력 가능합니다.');
        } catch(err) {
            return next(err);
        }

        // 데이터 저장
        let json = null;

        try {
            json = await UserService.editItem({
                deptno: deptno,
                dname: dname,
                loc: loc
            });
        } catch (err) {
            return next(err);
        }
        res.sendResult({ data: json });
    });

    /** 데이터 삭제 --> Delete(DELETE) */
    router.delete(`${url}/:usernum`, async (req, res, next) => {
        // 파라미터 받기
        const { deptno } = req.params;

        // if(req.session.uid === undefined) {
        //     // 사용자 권한 에러
        //     return next(new ForbiddenException('로그인이 필요합니다.'));
        // }
        
        // 유효성 검사
        
        try {
            regexHelper.value(deptno, '학과번호가 없습니다.');
            regexHelper.num(deptno, '학과번호는 숫자 형식만 가능합니다.');
        } catch (err) {
            return next(err);
        }

        try {
            await UserService.deleteItem({
                deptno: deptno
            })
        } catch (err) {
            return next(err);
        }
        res.sendResult();
    });

    return router;
})();