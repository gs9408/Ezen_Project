import React, { memo, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getList, getItem, postItem, putItem, deleteItem } from './slices/ProductSlice';

const Test = memo(() => {
    const dispatch = useDispatch();
    const { data, pagenation, loading, error } = useSelector((state) => state.ProductSlice);

    useEffect(() => {
        dispatch(getList());

        // dispatch(getItem({id:1203}));

        // dispatch(postItem({dname: 'React.js', loc: '1403호'}));

        // dispatch(putItem({id: 1200, dname: 'React.js수정', loc: '1406호'}));

        // dispatch(deleteItem({id: 1203}));
    }, [dispatch]);

    return (
        loading ? "loading..." : (
            error ? JSON.stringify(error) : (
                <>
                    {JSON.stringify(data)}
                    <br />
                    {JSON.stringify(pagenation)}
                </>
            )
        )
    );
});

export default Test;