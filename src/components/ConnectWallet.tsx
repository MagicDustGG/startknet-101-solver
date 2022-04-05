import { InjectedConnector, useStarknet } from "@starknet-react/core";

const ConnectWallet = () => {
  const { connect } = useStarknet();

  return (
    <button onClick={() => connect(new InjectedConnector())}>
      Connect Wallet
    </button>
  );
};

export default ConnectWallet;
