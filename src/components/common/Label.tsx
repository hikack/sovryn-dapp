interface Props {
  title: string;
  className?: string;
}

export const Label: React.FC<Props> = ({ title, children, className }) => {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      <label className="font-medium mb-2.5">{title}</label>
      {children}
    </div>
  );
};
