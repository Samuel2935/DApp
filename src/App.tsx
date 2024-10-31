import "./App.css"
import { WalletProvider } from "./hooks/WalletProvider"
import { WalletList } from "./components/WalletList"
import { SelectedWallet } from "./components/SelectedWallet"
import { WalletError } from "./components/WalletError"

function App() {
  return (
   <div className="container providers">
     <WalletProvider>
      
      <WalletList />
    <hr />
      <SelectedWallet />
      <WalletError /> 
   
    </WalletProvider>
   </div>
  )
}

export default App;