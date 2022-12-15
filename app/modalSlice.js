import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modal: false
  },
  reducers: {
    setModal: (state, action) => {
      state.modal = action.payload
    }
  }
})

export const { setModal } = modalSlice.actions

export default modalSlice.reducer
