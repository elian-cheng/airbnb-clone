import { useCallback } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

interface ICounterProps {
  title: string;
  subtitle: string;
  value: number;
  onChange: (value: number) => void;
}

const CounterInput: React.FC<ICounterProps> = ({ title, subtitle, value, onChange }) => {
  const addValueHandler = useCallback(() => {
    onChange(value + 1);
  }, [onChange, value]);

  const reduceValueHandler = useCallback(() => {
    if (value === 1) {
      return;
    }

    onChange(value - 1);
  }, [onChange, value]);

  const inputChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = +event.target.value;
      if (value < 1) {
        return;
      }
      onChange(value);
    },
    [onChange]
  );

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col">
        <div className="font-medium">{title}</div>
        <div className="font-light text-gray-600">{subtitle}</div>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div
          onClick={reduceValueHandler}
          className="
            w-10
            h-10
            rounded-full
            border-[1px]
            border-neutral-400
            flex
            items-center
            justify-center
            text-neutral-600
            cursor-pointer
            hover:opacity-80
            transition
          "
        >
          <AiOutlineMinus />
        </div>
        <input
          type="number"
          min="1"
          max="5"
          step="1"
          className="
            w-10
            h-10
            text-xl
            text-neutral-600
            border-neutral-400
            rounded-md
            text-center
          "
          value={value}
          onChange={inputChangeHandler}
        />
        <div
          onClick={addValueHandler}
          className="
            w-10
            h-10
            rounded-full
            border-[1px]
            border-neutral-400
            flex
            items-center
            justify-center
            text-neutral-600
            cursor-pointer
            hover:opacity-80
            transition
          "
        >
          <AiOutlinePlus />
        </div>
      </div>
    </div>
  );
};

export default CounterInput;
