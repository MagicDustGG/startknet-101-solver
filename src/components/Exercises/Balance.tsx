import {
  useContract,
  useStarknet,
  useStarknetCall,
} from "@starknet-react/core";
import { Abi, number } from "starknet";
import abi from "../../abis/TDERC20.json";

const ADDRESS =
  "0x074002c7df47096f490a1a89b086b8a468f2e7c686e04a024d93b7c59f934f83";

const Balance = () => {
  const { account } = useStarknet();
  const { contract } = useContract({ abi: abi as Abi, address: ADDRESS });
  const { data, loading } = useStarknetCall({
    contract,
    method: "balanceOf",
    args: [account!],
  });
  const balance = data
    ? parseInt(data[0].low.toString()) / 1000000000000000000
    : undefined;
  console.log(data ? data : "not yet loaded");
  return (
    <div className="p-4">
      <div
        className={`${loading ? "animate-pulse" : "animate-ping"} ${
          !balance && "text-slate-400"
        }`}
      >
        {balance || 0}
      </div>
    </div>
  );
};

export default Balance;
