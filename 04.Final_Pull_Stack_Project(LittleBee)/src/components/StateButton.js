import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

const StateButton = memo(({state, id}) => {
    function Review() {
        var option = "width = 500, height = 550, location = no"
        window.open('/window.html', '_blank', option);
    }

    if (state == '결제진행중') {
        return (<button><NavLink to={`/mymain/ordercancle?id=${id}`}>주문취소</NavLink></button>);
    } else if (state == '결제완료'){
        return (<button><NavLink to={`/mymain/ordercancle?id=${id}`}>주문취소</NavLink></button>)
    } else if (state == '배송준비중'){
        return (<button><NavLink to={`/mymain/ordercancle?id=${id}`}>주문취소</NavLink></button>)
    } else if (state == '배송중'){
        return (<button>배송조회</button>)
    } else if (state == '배송완료'){
        return (
            <>
                <button><NavLink to={`/mymain/orderchange?id=${id}`}>교환/반품 신청</NavLink></button>
                {/* <button>리뷰작성</button> */}
                <button type='button' onClick={Review}>리뷰작성</button>
            </>
        )
    } else if (state == '교환'){
        return (<button>교환정보</button>)
    } else if (state == '환불'){
        return (<button>환불정보</button>)
    } else if (state == '취소'){
        return (<button>취소정보</button>)
    }
});

export default StateButton;