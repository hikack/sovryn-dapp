interface Props {}

const assets = [
  {
    label: "rETH",
    icon: "/images/ethereum.svg",
  },
  {
    label: "WEENUS",
    icon: "/images/weenus.svg",
  },
] as const;

export const Assets: React.FC<Props> = () => {
  return (
    <div>
      <ul className="flex items-center border border-input rounded-xl bg-input bg-opacity-5">
        {assets.map((asset, index) => (
          <li
            key={index}
            className="flex-1 flex justify-center items-center py-2.5 hover:bg-input hover:bg-opacity-50 cursor-pointer
             border-r border-input last:border-r-0 first:rounded-tl-xl first:rounded-bl-xl last:rounded-tr-xl last:rounded-br-xl"
          >
            <img src={asset.icon} alt={asset.label} className="mr-1" />
            <span>{asset.label}</span>
          </li>
        ))}
      </ul>
      <p className="text-xs mt-2.5">Available Balance: 20,000.00 WEENUS</p>
    </div>
  );
};
