import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [totalSale, setTotalSale] = useState([]);
    const [clearBill, setClearBill] = useState([]);
    const [pendingBill, setPendingBill] = useState([]);

    const totalSaleFetch = async () => {
        try {
            const resp = await axios.get('https://erp-crm-backend-nodejs.onrender.com/api/post/totalbill');
            setTotalSale(resp.data); 
            console.log(resp.data);
        } catch (error) {
            console.error("Error fetching total sale:", error);
        }
    };

    const clearBillFetch = async() =>{
        try {
            const resp = await axios.get('https://erp-crm-backend-nodejs.onrender.com/api/post/clearedbill')
            setClearBill(resp.data)
            console.log(resp.data)
        } catch (error) {
            console.error("Error fetching total sale:", error);
        }
    }

    const pendingBillFetch = async () => {
        try{

            const resp = await axios.get('https://erp-crm-backend-nodejs.onrender.com/api/post/pendingbill')
            setPendingBill(resp.data)
            console.log(resp.data)
        }
        catch(error) {
            console.error("Error fetching pending bills :", error)
        }
    }

    useEffect(() => {
        totalSaleFetch(); 
        clearBillFetch()
        pendingBillFetch()
    }, []);

    return (
        <AppContext.Provider value={{ totalSale, clearBill, pendingBill }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
