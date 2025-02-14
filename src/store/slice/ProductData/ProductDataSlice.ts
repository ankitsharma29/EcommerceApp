import {createAsyncThunk, createSlice, SerializedError} from '@reduxjs/toolkit';
import apiConfig from '../../../services/api/apiConfig';

const {api, apiPaths} = apiConfig;

type ProductDataState = {
  status: 'idle' | 'loading' | 'failed';
  loading: boolean;
  error: SerializedError | null;
  ProductDataResponse: any;
};

const initialState: ProductDataState = {
  ProductDataResponse: {},
  error: null,
  status: 'idle',
  loading: false,
};

export const fetchProductDetails = createAsyncThunk<any>(
  'ProductData',
  async (params: any) => {
    const response = await api.get<any>(apiPaths.getProduct);
    return response;
  },
);

export const ProductDataSlice = createSlice({
  name: 'ProductDataSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProductDetails.pending, state => {
      state.loading = true;
      state.status = 'loading';
      state.error = null;
    });

    builder.addCase(fetchProductDetails.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.ProductDataResponse = payload;
      state.status = 'idle';
    });

    builder.addCase(fetchProductDetails.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
      state.status = 'failed';
    });
  },
});

export default ProductDataSlice.reducer;
