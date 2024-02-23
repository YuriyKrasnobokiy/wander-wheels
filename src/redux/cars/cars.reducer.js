// import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// const getAllCars = async () => {
//   try {
//     const response = await axios.get(
//       'https://654f6668358230d8f0cd4625.mockapi.io/contacts/adverts'
//     );
//     const allCars = response.data;
//     return allCars;
//   } catch (error) {
//     console.error('Error fetching cars:', error);
//   }
// };

// const initialState = {
//   cars: getAllCars,
// };

// const carsSlice = createSlice({
//   // Ім'я слайсу
//   name: 'cars',
//   // Початковий стан редюсера слайсу
//   initialState,
//   // Об'єкт редюсерів
//   reducers: {
//     // addProduct(state, action) {
//     //   // state.products = [...state.products, action.payload];
//     //   //або//
//     //   state.products.push(action.payload);
//   },
//   // deleteProduct(state, action) {
//   //   state.products = state.products.filter(
//   //     product => product.id !== action.payload
//   //   );
//   // },
//   // },
// });

// // Генератори екшен кріейтерів
// // export const { addProduct, deleteProduct } = productsSlice.actions;
// // Редюсер слайсу
// export const carsReducer = carsSlice.reducer;
