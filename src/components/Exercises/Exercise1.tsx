import { useContract, useStarknetInvoke } from "@starknet-react/core";
import { Abi } from "starknet";
import abi from "../../abis/ex01.json";

const ADDRESS =
  "0x04b9b3cea3d4b21f7f272a26cf0d54f40348a9d8509f951b217e33d4e9c80af2";

const Exercise1 = () => {
  const { contract } = useContract({ abi: abi as Abi, address: ADDRESS });
  const { data, loading, error, reset, invoke } = useStarknetInvoke({
    contract,
    method: "claim_points",
  });
  return (
    <>
      <h1>Exercise 1</h1>
      <p>
        This exercise consists in calling the <code>claim_points</code> method
        of the contract.
      </p>
      {error && <p>{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <button onClick={() => invoke({ args: [] })}>Claim points</button>
      )}
      {data && <p>{JSON.stringify(data)}</p>}
    </>
  );
};

export default Exercise1;
