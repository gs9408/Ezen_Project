const { query } = require('express');
const express = require('express');
const { pagenation } = require('../helper/UtilHelper');
const NoticeService = require('../services/NoticeService');

module.exports = (() => {
    const router = express.Router();

    /** 공지 데이터를 불러오고 데이터의 숫자를 셈 */
    router.get('/noticelist', async (req, res, next) => {
        // 검색어 파라미터
        const { noticecategory, noticetitle, page=1, rows=10 } = req.query;

        // 검색어를 MyBatis에 전달하기 위한 객체로 구성
        const params = {};
        if (noticecategory) {
            params.noticecategory = noticecategory;
        }
        if (noticetitle) {
            params.noticetitle = noticetitle;
        }

        // 데이터 조회
        let json = null;
        let pageInfo = null;

        try {
            // 검색된 데이터
            json = await NoticeService.getList(params);
            
            // 전체데이터 수 얻기
            const totalCount = await NoticeService.getCount(params);
            pageInfo = pagenation(totalCount, page, rows);
            params.offset = pageInfo.offset;
            params.listCount = pageInfo.listCount;
        } catch (err) {
            return next(err);
        }

        res.sendResult({ data: json, pagenation: pageInfo, params: params});
    });

    /** 선택된 글 데이터를 불러옴 */
    router.get(`/notice`, async (req, res, next) => {
        // 검색어 파라미터
        const { noticenum } = req.query;

        // 데이터 조회
        let json = null;

        try {
            // 검색된 데이터
            json = await NoticeService.getItem({
                noticenum: noticenum
            });
        } catch (err) {
            return next(err);
        }

        res.sendResult({ data: json });
    });

    return router;
})();