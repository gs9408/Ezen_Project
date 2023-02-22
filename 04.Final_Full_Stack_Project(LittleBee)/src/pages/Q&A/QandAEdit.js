import React, { memo } from "react";
import { useCallback } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import QandAEditStyle from "../../assets/css/Notice_Q&A/QandAEditStyle";

const QandAEdit = memo(() => {
  const onSearchClick = useCallback((e) => {
    alert("검색버튼 누름");
  }, []);

  const onSend = useCallback((e) => {
    alert("보내기버튼 누름");
  }, []);

  return (
    <QandAEditStyle>
      <h1>Q&A</h1>
      <form onSubmit={onSearchClick}>
        <select id="button01">
          <option value="01">유형을 선택해주세요.</option>
          <option value="02">반품/교환/환불/AS</option>
          <option value="03">회원정보/로그인</option>
          <option value='04'>주문/결제/배송</option>
          <option value='05'>이벤트/당첨내역</option>
          <option value='06'>기타</option>
        </select>
        <select id="button02">
          <option value="01">주문내역을 선택해주세요.</option>
          <option value="02">=======================</option>
        </select>
        <input type="submit" value="주문상품 선택" className="input_submit" />
      </form>
      <div className="write_box">
        <input type="text" placeholder="제목을 입력해주세요." className="title" />
        <textarea placeholder="내용을 입력해주세요." className="textbox"></textarea>
        {/* <CKEditor
            editor={ ClassicEditor }
            config={{
                placeholder: "내용을 입력하세요.",
            }}
            data=""
            // onReady={ editor => {
            //     // You can store the "editor" and use when it is needed.
            //     console.log( 'Editor is ready to use!', editor );
            // } }
            // onChange={ ( event, editor ) => {
            //     const data = editor.getData();
            //     console.log( { event, editor, data } );
            // } }
            // onBlur={ ( event, editor ) => {
            //     console.log( 'Blur.', editor );
            // } }
            // onFocus={ ( event, editor ) => {
            //     console.log( 'Focus.', editor );
            // } }
        /> */}
      </div>
      <div className="img_box">
        <div className="img_upload">
          <div className="circle"></div>
          <div className="row"></div>
          <div className="col"></div>
        </div>
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
      </div>
      <input
        type="submit"
        value="보내기"
        className="input_send"
        onClick={onSend}
      />
    </QandAEditStyle>
  );
});

export default QandAEdit;
