import { useStarknet } from "@starknet-react/core";
import ConnectWallet from "./components/ConnectWallet";
import Exercises from "./components/Exercises";

function App() {
  const { account } = useStarknet();

  const connected = !!account;

  return (
    <div className="min-h-screen container mx-auto">
      <div className="flex p-8 my-4 border border-2 border-black justify-center">
        <h1 className="text-4xl">
          <a
            className="underline cursor-pointer"
            href="https://github.com/l-henri/starknet-cairo-101"
          >
            Starknet Cairo 101
          </a>{" "}
          solver
        </h1>
      </div>
      {connected ? <Exercises /> : <ConnectWallet />}
    </div>
  );
}

export default App;
