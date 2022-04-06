import {
  useContract,
  useStarknet,
  useStarknetBlock,
  useStarknetInvoke,
  useStarknetTransactionManager,
} from "@starknet-react/core";
import { useEffect, useState } from "react";
import { Abi } from "starknet";
import abi from "../../abis/ex12.json";

const ADDRESS =
  "0x0658e159d61d4428b6d5fa90aa20083786674c49a645fe416fc4c35b145f8a83";

const Exercise12 = () => {
  const { contract } = useContract({ abi: abi as Abi, address: ADDRESS });
  const { account } = useStarknet();
  const { data: blockData } = useStarknetBlock();
  const [userInput, setUserInput] = useState("");
  const [secret, setSecret] = useState();

  const {
    loading: claiming,
    error: claimError,
    invoke: claim,
  } = useStarknetInvoke({
    contract,
    method: "claim_points",
  });
  const {
    data: registerTransaction,
    loading: registring,
    error: registerError,
    invoke: register,
  } = useStarknetInvoke({
    contract,
    method: "assign_user_slot",
  });
  useEffect(() => {
    if (!blockData || !registerTransaction) {
      return;
    }
    const registrationTransaction = (
      blockData as any
    ).transaction_receipts.find(
      ({ transaction_hash }: any) => transaction_hash === registerTransaction
    );
    if (!registrationTransaction) {
      return;
    }
    const event = registrationTransaction.events.find(
      (event: any) => event.data[0] === account
    );
    setSecret(event.data[1]);
  }, [blockData, registerTransaction]);

  return (
    <>
      <h1>Exercise 12</h1>
      <p>
        This exercise consists in calling the{" "}
        <code>assign_user_slot_called</code> method to get a secret value, read
        it from the emitted event and then provide it to the{" "}
        <code>claim_points</code> method.
      </p>
      {registerError && !registring && <p>{registerError}</p>}
      {claimError && !claiming && <p>{claimError}</p>}
      {registerTransaction && !secret && (
        <p>
          Registration is done, now wait for the block to be minted in order to
          read the secret in the events. This will take a few minutes.
        </p>
      )}
      {secret && <p>Secret value is: {parseInt(secret, 16) - 32}</p>}
      {registring && <p>Registring...</p>}
      {!registring && !registerTransaction && (
        <button onClick={() => register({ args: [] })}>
          Register to get a secret value
        </button>
      )}
      {claiming && <p>Claiming...</p>}
      {secret && !claiming && (
        <div className="flex">
          <input
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button onClick={() => claim({ args: [userInput] })}>
            Claim points
          </button>
        </div>
      )}
    </>
  );
};

export default Exercise12;
