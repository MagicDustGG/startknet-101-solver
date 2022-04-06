import { useContract, useStarknetInvoke } from "@starknet-react/core";
import { Abi } from "starknet";
import abi from "../../abis/ex01.json";
import Button from "./Button";
import Description from "./Description";
import Title from "./Title";
import Transaction from "./Transaction";

const ADDRESS =
  "0x04b9b3cea3d4b21f7f272a26cf0d54f40348a9d8509f951b217e33d4e9c80af2";

const Exercise1 = () => {
  const { contract } = useContract({ abi: abi as Abi, address: ADDRESS });
  const {
    data: transaction,
    loading,
    error,
    invoke,
  } = useStarknetInvoke({
    contract,
    method: "claim_points",
  });
  return (
    <div className="mb-12">
      <Title>Exercise 1</Title>
      <Description>
        This exercise consists in calling the <code>claim_points</code> method
        of the contract.
      </Description>
      {error && <p>{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Button onClick={() => invoke({ args: [] })}>Claim points</Button>
      )}
      {transaction && <Transaction>{transaction}</Transaction>}
    </div>
  );
};

export default Exercise1;
