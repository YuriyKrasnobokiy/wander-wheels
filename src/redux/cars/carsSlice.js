import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://654f6668358230d8f0cd4625.mockapi.io/adverts';

export const fetchCars = createAsyncThunk('cars/fetchCars', async () => {
  try {
    const response = await axios.get(`${API_URL}?page=1&limit=12`);
    return response.data;
  } catch (error) {
    console.error('Error fetching cars:', error);
    throw error;
  }
});

export const fetchMoreCars = createAsyncThunk(
  'cars/fetchMore',
  async currentPage => {
    try {
      const response = await axios.get(
        `${API_URL}?page=${currentPage}&limit=12`
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching cars:', error);
      throw error;
    }
  }
);

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    currentPage: 1,
    isLoading: false,
    error: null,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
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
      .addCase(fetchMoreCars.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMoreCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cars = [...state.cars, ...action.payload];
        state.currentPage += 1;
        if (action.payload.length === 0) {
          alert('No more cards available!');
        }
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchMoreCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { setCurrentPage } = carsSlice.actions;
export default carsSlice.reducer;
