import { FC } from "react";

const Transaction: FC = ({ children }) => (
  <div className="mt-4">
    <a
      className="border border-slate-800 bg-white text-slate-800 px-4 py-2"
      target="_blank"
      href={`https://goerli.voyager.online/tx/${children}`}
    >
      Voir la transaction sur Voyager
    </a>
  </div>
);

export default Transaction;
