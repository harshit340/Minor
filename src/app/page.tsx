'use client'

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "@/provider/redux/store";
import { ChangeAccount } from "@/provider/redux/SetAccount";



  

export default function Home() {
    const username = useSelector((state: RootState) => state.SetUsername.name);
    const accountName = useSelector((state: RootState) => state.SetAccount.name);
    const dispatch = useDispatch();

   

    const connectMetaMask = async () => {
        console.log(accountName)
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
                dispatch(ChangeAccount(accounts[0]));
            } catch (error) {
                const errorMessage = (error as any).code === 4001
                    ? "MetaMask connection request was rejected by the user."
                    : "An error occurred while connecting to MetaMask. Please try again.";
                alert(errorMessage);
                console.error(error);
            }
        } else {
            alert("MetaMask extension not detected!");
        }
    };

    

    


    return (
        <div >
       
          write your landing page code here Rudra Yadav 

        </div>
    );
}

