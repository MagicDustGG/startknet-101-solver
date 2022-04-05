import {
  useContract,
  useStarknetCall,
  useStarknetInvoke,
} from "@starknet-react/core";
import { useEffect, useState } from "react";
import { Abi } from "starknet";
import abi from "../../abis/ex02.json";

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
  const { data, loading, error, reset, invoke } = useStarknetInvoke({
    contract,
    method: "claim_points",
  });
  return (
    <>
      <h1>Exercise 2</h1>
      <p>
        This exercise consists in calling the <code>my_secret_value</code>{" "}
        method to get a secret value, then provide it to the{" "}
        <code>claim_points</code> method.
      </p>
      {secret ? (
        <p>Secret value is: {secret[0].toNumber()}</p>
      ) : (
        <p>Secret value is loading</p>
      )}
      {error && !loading && <p>{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex">
          <input
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button onClick={() => invoke({ args: [userInput] })}>
            Claim points
          </button>
        </div>
      )}
      {data && <p>{JSON.stringify(data)}</p>}
    </>
  );
};

export default Exercise2;
