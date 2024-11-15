import { useContext } from "react"
import { WalletProviderContext } from "./WalletProvider"


// export const useWalletProvider = () => useContext(WalletProviderContext)
export const useWalletProvider = () => {
    const context = useContext(WalletProviderContext);
  
    if (!context) {
      throw new Error("useWalletContext must be used within a WalletProvider");
    }
  
    return context;
  };
 


