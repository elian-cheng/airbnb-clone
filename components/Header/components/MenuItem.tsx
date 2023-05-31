'use client';

interface IMenuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem: React.FC<IMenuItemProps> = ({ onClick, label }) => {
  return (
    <li
      className="
        px-4 
        py-3 
        hover:bg-neutral-100 
        transition
        font-semibold
      "
    >
      <button onClick={onClick}>{label}</button>
    </li>
  );
};

export default MenuItem;
