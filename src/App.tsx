import { InjectedConnector, useStarknet } from "@starknet-react/core";

function App() {
  const { account } = useStarknet();
  const { connect } = useStarknet();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <button onClick={() => connect(new InjectedConnector())}>
            Connect Wallet
          </button>
        </p>
        <p>gm {account}</p>
      </header>
    </div>
  );
}

export default App;
