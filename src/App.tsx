import { InjectedConnector, useStarknet } from "@starknet-react/core";
import ConnectWallet from "./components/ConnectWallet";
import Exercises from "./components/Exercises";

function App() {
  const { account } = useStarknet();

  const connected = !!account;

  return <div>{connected ? <Exercises /> : <ConnectWallet />}</div>;
}

export default App;
