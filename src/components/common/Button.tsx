interface Props {
  variant?: "contain" | "outline";
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<Props> = ({
  variant = "contain",
  disabled = false,
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-48 text-xl font-extrabold rounded-lg py-3 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed ${
        variant === "outline"
          ? "bg-transparent text-cta border border-cta"
          : "bg-cta text-black"
      }`}
    >
      {children}
    </button>
  );
};
