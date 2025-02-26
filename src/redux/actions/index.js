import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../../constants";


export const getFlights = createAsyncThunk("flights/getFlight", 
    async () => {
    //* 1) api istegi at
    const res = await axios.request(options);

    //* 2) api'den gelen verileri formatla (aircraft dizisi icerisindeki her bir ucus verisini dizi olarak gelmisti projede kullanimi kolaylastirmak icin dizileri nesneye cevirdik)
    
    const formatted = res.data.aircraft.map((item) => ({
        
            id: item[0],
            code: item[1],
            lat: item[2],
            lng: item[3],
        
    }));

    //* 2) aksiyonun payloadini return et

 return formatted;

});
