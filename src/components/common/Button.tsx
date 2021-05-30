interface Props {
  variant?: "contain" | "outline";
  onClick?: () => void;
}

export const Button: React.FC<Props> = ({
  variant = "contain",
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="w-48 bg-cta text-black text-xl font-extrabold rounded-lg py-3 focus:outline-none"
    >
      {children}
    </button>
  );
};
