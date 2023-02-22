import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./slices/ProductSlice";
import BasketSlice from "./slices/BasketSlice";
import NoticeSlice from "./slices/NoticeSlice";
import UserSlice from "./slices/UserSlice";
import PaymentSlice from "./slices/PaymentSlice";

const store = configureStore({
    reducer: {
        ProductSlice: ProductSlice,
        BasketSlice: BasketSlice,
        NoticeSlice: NoticeSlice,
        UserSlice: UserSlice,
        PaymentSlice: PaymentSlice,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({
            serializableCheck: false,
        }),
    ],
});

export default store;
