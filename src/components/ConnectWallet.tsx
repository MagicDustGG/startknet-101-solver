import { InjectedConnector, useStarknet } from "@starknet-react/core";
import Button from "./Exercises/Button";

const ConnectWallet = () => {
  const { connect } = useStarknet();

  return (
    <div className="flex justify-center mt-64">
      <Button
        onClick={() => connect(new InjectedConnector())}
        extraClass="py-8 px-12 text-2xl"
      >
        Connect wallet
      </Button>
    </div>
  );
};

export default ConnectWallet;
