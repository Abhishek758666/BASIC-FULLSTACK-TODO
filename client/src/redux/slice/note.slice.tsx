import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "../../utils/Instance";

export const getNotes = createAsyncThunk<
  any,
  {
    data: any;
  }
>("getNotes", async ({ data }) => {
  try {
    const response = await AxiosInstance("/customer/login", data);
    return response;
  } catch (error) {
    throw error;
  }
});
