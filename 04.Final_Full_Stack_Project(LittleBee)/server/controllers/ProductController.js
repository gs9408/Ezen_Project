const express = require('express');
const logger = require('../helper/LogHelper');
const regexHelper = require('../helper/RegexHelper');
const ProductService = require('../services/ProductService');
const { pagenation } = require('../helper/UtilHelper');
const { ForbiddenException } = require('../helper/ExceptionHelper');

module.exports = (() => {
    const url = '/products';
    const router = express.Router();

    /** 전체목록 조회 --> Read(SELECT) */
    router.get(`${url}/:maincategory_maincategorynum`, async (req, res, next) => {
        const { maincategory_maincategorynum: category, sort } = req.params;
        console.log(req.params);

        // 페이지수, 표시 내용 파라미터
        const { page=1, rows=20 } = req.query;

        // 검색어를 MyBatis에 전달하기 위한 객체로 구성
        const params = {};

        // 데이터 조회
        let json = null;
        let pageInfo = null;

        try {
            // 전체데이터 수 얻기
            const totalCount = await ProductService.getCount(params);
            pageInfo = pagenation(totalCount, page, rows);

            params.offset = pageInfo.offset;
            params.listCount = pageInfo.listCount;
            json = await ProductService.getList({ category: category });
        } catch (err) {
            return next(err);
        }
        
        res.sendResult({ data: json, pagenation: pageInfo });
    });

    /** 정렬 */
    router.get(`${url}/:maincategory_maincategorynum/sort`, async (req, res, next) => {
        const { value } = req.query;
        const { maincategory_maincategorynum: category } = req.params;
        console.log(`GET 파라미터 category - ${category}`);
        console.log(`GET 파라미터 value - ${value}`);

        // 페이지수, 표시 내용 파라미터
        const { page=1, rows=20 } = req.query;

        // 검색어를 MyBatis에 전달하기 위한 객체로 구성
        const params = {};

        // 데이터 조회
        let json = null;
        let pageInfo = null;

        try {
            // 전체데이터 수 얻기
            const totalCount = await ProductService.getCount(params);
            pageInfo = pagenation(totalCount, page, rows);

            params.offset = pageInfo.offset;
            params.listCount = pageInfo.listCount;
            json = await ProductService.getSort({ category: category || null, value: value });
        } catch (err) {
            return next(err);
        }
        
        res.sendResult({ data: json, pagenation: pageInfo });
    });

    /** 검색 결과 목록 조회 --> Read(SELECT) */
    router.get(`/search`, async (req, res, next) => {
        // 검색어 파라미터
        const { query, page=1, rows=30 } = req.query;

        // 검색어를 MyBatis에 전달하기 위한 객체로 구성
        const params = {};
        if (query) {
            params.prodname = query;
        }
        else {
            window.alert("검색 결과가 존재하지 않습니다.");
        }
        // console.log(params);

        // 데이터 조회
        let json = null;
        let pageInfo = null;

        try {
            // 전체데이터 수 얻기
            const totalCount = await ProductService.getCount(params);
            pageInfo = pagenation(totalCount, page, rows);

            params.offset = pageInfo.offset;
            params.listCount = pageInfo.listCount;
            json = await ProductService.getSearchList(params);
        } catch (err) {
            return next(err);
        }

        res.sendResult({ data: json, pagenation: pageInfo });
    });

    /** SubCategory 조회 */
    router.get(`${url}/:maincategory_maincategorynum/:subcategory_subcategorynum`, async (req, res, next) => {
        const { maincategory_maincategorynum: category, subcategory_subcategorynum: subcategory } = req.params;

        const { query, page=1, rows=5 } = req.query;

        // 검색어를 MyBatis에 전달하기 위한 객체로 구성
        const params = {};
        if (query) {
            params.prodname = query;
            params.subcategory_subcategorynum = query;
        }

        // 데이터 조회
        let json = null;
        let pageInfo = null;

        try {
            // 전체데이터 수 얻기
            const totalCount = await ProductService.getCount(params);
            pageInfo = pagenation(totalCount, page, rows);

            params.offset = pageInfo.offset;
            params.listCount = pageInfo.listCount;
            json = await ProductService.getSubCategory({
                params,
                category: category,
                subcategory: subcategory
            });
            console.log(params);
        } catch (err) {
            return next(err);
        }

        res.sendResult({ data: json, pagenation: pageInfo });
    })

    /** 상품 단일행 조회 --> Read(SELECT) */
    router.get(`/goods/*/:prodnum`, async (req, res, next) => {
        // 파라미터 받기
        const { prodnum } = req.params;
        console.log(prodnum);

        // 파라미터 유효성 검사 
        try {
            // 유효성검사
        } catch (err) {
            return next(err);
        }

        // 데이터 조회
        let json = null;
        let json2 = null;

        try {
            json = await ProductService.getItem({
                prodnum: prodnum
            });

            json2 = await ProductService.getItemOpt({
                prodnum: prodnum,
            })

        } catch (err) {
            return next(err);
        }

        res.sendResult({ data: json, opt: json2 });
    });

    /** 데이터 추가 --> Create(INSERT) */
    router.post(url, async (req, res, next) => {
        // 파라미터 받기
        const { prodname, prodprice, thumbnail, registdate, prodinfo, customerguide, maincategory_maincategorynum, subcategory_subcategorynum } = req.body
        try {
            // 유효성검사
        } catch (err) {
            return next(err);
        }

        // 데이터 저장
        let json = null;

        try {
            json = await ProductService.addItem({
                prodname: prodname,
                prodprice: prodprice,
                thumbnail: thumbnail,
                registdate: registdate,
                prodinfo: prodinfo,
                customerguide: customerguide,
                maincategory_maincategorynum: maincategory_maincategorynum,
                subcategory_subcategorynum: subcategory_subcategorynum,
            });
        } catch (err) {
            return next(err);
        }

        res.sendResult({ data: json });
    });

    return router;
})();