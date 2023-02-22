const express = require('express');
const logger = require('../helper/LogHelper');
const regexHelper = require('../helper/RegexHelper');
const BasketService = require('../services/BasketService');
const { pagenation } = require('../helper/UtilHelper');
const { ForbiddenException } = require('../helper/ExceptionHelper');

module.exports = (() => {
    const url = '/mymain/mybasket';
    const router = express.Router();

    /** 전체목록 조회 --> Read(SELECT) */
    router.get('/mymain/mybasket', async (req, res, next) => {

        // 데이터 조회
        let json = null;
        let opt = null;

        try {
            json = await BasketService.getList();
            opt = await BasketService.getOptList();
        } catch (err) {
            return next(err);
        }

        res.sendResult({ data: json, opt: opt });
    });

    /** 단일행 조회 --> Read(SELECT) */
    router.get(`/mymain/mybasket`, async (req, res, next) => {
        // 파라미터 받기
        const { basketno } = req.params;

        // 파라미터 유효성 검사 
        try {
        } catch (err) {
            return next(err);
        }

        // 데이터 조회
        let json = null;

        try {
            json = await BasketService.getItem({
                basketno: basketno
            });
        } catch (err) {
            return next(err);
        }

        res.sendResult({ data: json });
    });

    /** 데이터 추가 --> Create(INSERT) */
    router.post(`/goods/:category/:prodnum`, async (req, res, next) => {
        // 파라미터 받기
        const { prodname, thumbnail, optnum, optname, prodqty, prodprice, member_usernum, prodnum } = req.body
        try {
            // 유효성검사
        } catch (err) {
            return next(err);
        }

        // 데이터 저장
        let json = null;

        try {
            json = await BasketService.addItem({
                prodnum: prodnum,
                prodname: prodname,
                thumbnail: thumbnail,
                optname: optname,
                prodqty: prodqty,
                prodprice: prodprice,
                member_usernum: member_usernum,
                productoption_optnum: optnum
            });
        } catch (err) {
            return next(err);
        }

        res.sendResult({ data: json });
    });

    /** 수량 데이터 수정 --> Update(UPDATE) */
    router.put(`/mymain/mybasket`, async (req, res, next) => {
        // 파라미터 받기
        const { basketno, prodqty, optnum, optname } = req.body;

        // 유효성검사
        try {
            // 유효성검사
        } catch(err) {
            return next(err);
        }

        // 데이터 저장
        let json = null;

        try {
            json = await BasketService.editItem({
                basketno: basketno,
                prodqty: prodqty,
                optnum: optnum,
                optname: optname
            });
        } catch (err) {
            return next(err);
        }
        res.sendResult({ qty: json });
    });

    /** 데이터 삭제 --> Delete(DELETE) */
    router.delete(`/mymain/mybasket/:basketno`, async (req, res, next) => {
        // 파라미터 받기
        const {basketno} = req.params;
        console.log(basketno);

        // if(req.session.uid === undefined) {
        //     // 사용자 권한 에러
        //     return next(new ForbiddenException('로그인이 필요합니다.'));
        // }
        
        // 유효성 검사
        try {

        } catch (err) {
            return next(err);
        }

        try {
            await BasketService.deleteItem({
                basketno: basketno,
            })
        } catch (err) {
            return next(err);
        }
        res.sendResult();
    });

    /** 데이터 전체삭제 --> Delete(DELETE) */
    router.delete(`/mymain/mybasket`, async (req, res, next) => {
        // 파라미터 받기
        const { usernum } = req.query;

        // if(req.session.uid === undefined) {
        //     // 사용자 권한 에러
        //     return next(new ForbiddenException('로그인이 필요합니다.'));
        // }
        
        // 유효성 검사
        try {

        } catch (err) {
            return next(err);
        }

        try {
            await BasketService.deleteAllItem({
                usernum: usernum
            })
        } catch (err) {
            return next(err);
        }
        res.sendResult();
    });

    return router;
})();