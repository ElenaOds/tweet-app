import { createAsyncThunk } from '@reduxjs/toolkit';
import {getUsers, updateUser } from '../service/tweetsApi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const getTweets = createAsyncThunk('users/get', async (thunkAPI) => {
    try {
      const { data } = await getUsers();
      return data;
    } catch (error) {
      toast.error('Cannot get tweets');
      return thunkAPI.rejectWithValue(error.message);
    }
  });

  
  export const updateTweets = createAsyncThunk('users/update',
    async (id, thunkAPI) => {
      try {
        const { data } = await updateUser(id);
        return data;
      } catch (error) {
        toast.error('Error');
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
