import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

//Data 
export const fecthProducts = createAsyncThunk('products/getProducts', async () => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/products`)
    return res.data
})
export const fecthProductsId = createAsyncThunk('products/getProductsId', async (id) => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/products/${id}`)
    return res.data
})

//Slice
export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        detail: [],
        status: "idle",
        count: 0,
        budget: 100000000000,
        initialMoney: 100000000000,
    },
    reducers: {
        updatePrice: (state, action) => {
            const { id, count, price } = action.payload

            const product = state.items.find((product) => product.id === id)
            product.count = count
            product.productPrice = price
            let countPrice = 0
            state.items.map((item) => countPrice += Number(item.count) * Number(item.productPrice))

            state.budget = Number(state.initialMoney - countPrice)
        },
        

    },
    extraReducers: {
        [fecthProducts.pending]: (state, action) => {
            state.status = "loading"

        }, [fecthProducts.fulfilled]: (state, action) => {
            state.status = "succed"
            state.items = action.payload

        }, [fecthProducts.rejected]: (state, action) => {
            state.status = "failed"
            state.error = action.error.message
        }, 
        
        [fecthProductsId.pending]: (state, action) => {
            state.status = "loading"

        }, [fecthProductsId.fulfilled]: (state, action) => {
            state.status = "succed"
            state.detail = action.payload

        }, [fecthProductsId.rejected]: (state, action) => {
            state.status = "failed"
            state.error = action.error.message
        }
    }
})

export const selectProducts = (state) => state.products.items
export const selectStatus = (state) => state.products.status
export const selectBudget = (state) => state.products.budget
export const selectMoney = (state) => state.products.initialMoney
export const selectDetail = (state) => state.products.detail

export const { updatePrice } = productsSlice.actions

export default productsSlice.reducer