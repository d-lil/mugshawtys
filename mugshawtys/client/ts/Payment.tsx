// Import React and ReactDOM for rendering
import * as React from "react"
import * as ReactDOM from 'react-dom';

// Import required hooks and utilities from usedapp and ethers libraries
import { Mainnet, DAppProvider, useEthers, useSendTransaction, useTransactions, useEtherBalance, Config, Goerli } from '@usedapp/core'
import { formatEther, parseEther } from '@ethersproject/units'
import { getDefaultProvider } from 'ethers'

// Define your DApp config for Mainnet and Goerli
const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider('mainnet'),
    [Goerli.chainId]: getDefaultProvider('goerli'),
  },
}

// Define a Connect button component for connecting and disconnecting wallet
function ConnectButton() {
  const { account, deactivate, activateBrowserWallet } = useEthers()
  if (account) return <button onClick={() => deactivate()}>Disconnect</button>
  else return <button onClick={() => activateBrowserWallet()}>Connect</button>
}

// Define a SendTransaction component to send transaction
function SendTransaction() {
  const { sendTransaction } = useSendTransaction()
  const [disabled, setDisabled] = React.useState(false)

  const handleClick = () => {
    const address = 'Recipient_Address' // Replace with the recipient's address
    const amount = 'Amount_in_Ether' // Replace with the amount of Ether you want 
    setDisabled(true)
    sendTransaction({ to: address, value: parseEther(amount) })
  }

  return <button onClick={handleClick} disabled={disabled}>Send Transaction</button>
}

// Define a TransactionStatus component to display the transaction status
function TransactionStatus() {
  const { transactions } = useTransactions()
  const { account } = useEthers()

  const myTransactions = transactions.filter((tx) => tx.transaction.from === account)

  return (
    <div>
      {myTransactions.map((tx, index) => (
        <div key={index}>
          <p>Transaction hash: {tx.transaction.hash}</p>
          <p>Status: {tx.receipt ? 'Mined' : 'Pending'}</p>
          <p>Block number: {tx.receipt?.blockNumber}</p>
        </div>
      ))}
    </div>
  )
}

// Define the main App component
function App() {
  const { account, chainId } = useEthers()
  const etherBalance = useEtherBalance(account)

  // Check the chainId and display a message if it's not Mainnet or Goerli
  if (chainId && !config.readOnlyUrls[chainId]) {
    return <p>Please use either Mainnet or Goerli testnet.</p>
  }

  return (
    <div>
      <ConnectButton />
      {etherBalance && (
        <div className="balance">
          <br />
          Address:
          <p className="bold">{account}</p>
          <br />
          Balance:
          <p className="bold">{formatEther(etherBalance)}</p>
        </div>
      )}
      <SendTransaction />
      <TransactionStatus />
    </div>
  )
}

// Render the App component inside the DAppProvider
ReactDOM.render(
  <DAppProvider config={config}>
    <App />
  </DAppProvider>,
  document.getElementById('root')
)
