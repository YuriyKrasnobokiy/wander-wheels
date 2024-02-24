import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCars = createAsyncThunk('cars/fetchCars', async () => {
  try {
    const response = await axios.get(
      'https://654f6668358230d8f0cd4625.mockapi.io/adverts'
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching cars:', error);
    throw error;
  }
});

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cars = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const {} = carsSlice.actions;
export default carsSlice.reducer;
