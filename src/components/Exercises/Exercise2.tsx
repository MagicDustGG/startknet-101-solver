import {
  useContract,
  useStarknetCall,
  useStarknetInvoke,
} from "@starknet-react/core";
import { useEffect, useState } from "react";
import { Abi } from "starknet";
import abi from "../../abis/ex02.json";
import Button from "./Button";
import Description from "./Description";
import Title from "./Title";
import Transaction from "./Transaction";

const ADDRESS =
  "0x06511a41c0620d756ff9e3c6b27d5aea2d9b65e162abdec72c4d746c0a1aca05";

const Exercise2 = () => {
  const { contract } = useContract({ abi: abi as Abi, address: ADDRESS });
  const [userInput, setUserInput] = useState("");
  const { data: secret } = useStarknetCall({
    contract,
    method: "my_secret_value",
    args: [],
  });
  const {
    data: transaction,
    loading,
    error,
    reset,
    invoke,
  } = useStarknetInvoke({
    contract,
    method: "claim_points",
  });
  return (
    <div className="mb-12">
      <Title>Exercise 2</Title>
      <Description>
        This exercise consists in calling the <code>my_secret_value</code>{" "}
        method to get a secret value, then provide it to the{" "}
        <code>claim_points</code> method.
      </Description>
      {secret ? (
        <p>Secret value is: {secret[0].toNumber()}</p>
      ) : (
        <p>Secret value is loading</p>
      )}
      {error && !loading && <p>{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex items-center">
          <input
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="border border-slate-200 h-12 mr-6"
          />
          <Button onClick={() => invoke({ args: [userInput] })}>
            Claim points
          </Button>
        </div>
      )}
      {transaction && <Transaction>{transaction}</Transaction>}
    </div>
  );
};

export default Exercise2;
