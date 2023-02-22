const express = require('express');
const logger = require('../helper/LogHelper');
const regexHelper = require('../helper/RegexHelper');
const PaymentService = require('../services/PaymentService');
const { pagenation } = require('../helper/UtilHelper');
const { ForbiddenException } = require('../helper/ExceptionHelper');

module.exports = (() => {
    const url = '/payment';
    const router = express.Router();

    /** 장바구니(전체,선택) 조회 --> Read(SELECT) */
    router.get(url, async (req, res, next) => {

        const { user, select } = req.query;
        const selectItem = req.cookies.cookie;
        const prodnum = req.cookies.prodnum;

        const params = {};

        // 데이터 조회
        let json = null;

        if(select === 'all') {
            params.usernum = user;
            try {
                json = await PaymentService.getAllList(params);
            } catch (err) {
                return next(err);
            }
        } else if (select === 'cookie') {
            params.usernum = user;
            params.selectItem = selectItem;
            try {
                json = await PaymentService.selectSeList(params);
            } catch (err) {
                return next(err);
            }
        } else if(select === 'item') {
            params.usernum = user;
            params.prodnum = prodnum;
            try {
                json = await PaymentService.selectItem(params);
            } catch (err) {
                return next(err);
            }
        }

        res.sendResult({ data: json });
    });

    router.post(url, async (req, res, next) => {
        // 파라미터 받기
        const { dname, loc } = req.body
        try {
            regexHelper.value(dname, '학과이름이 없습니다.');
            regexHelper.maxLength(dname, 20, '학과이름은 최대 20자까지 입력 가능합니다.');
        } catch (err) {
            return next(err);
        }

        // 데이터 저장
        let json = null;

        try {
            json = await PaymentService.addItem({
                dname: dname,
                loc: loc
            });
        } catch (err) {
            return next(err);
        }

        res.sendResult({ data: json });
    });
   
    return router;
})();