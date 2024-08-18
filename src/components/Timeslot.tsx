interface Props {
  handleClick: () => void;
  isActive: boolean;
  capacity: number;
  originalCapacity: number;
  time: string;
  isDisabled: boolean;
}

export function TimeSlot(props: Props) {
  const baseClasses =
    'px-6 py-7 border-white border-[1px] rounded-2xl relative';
  const activeClasses = 'bg-[#76BD00]';
  const disabledClasses = 'opacity-40';

  return (
    <button
      onClick={() => props.handleClick()}
      disabled={props.isDisabled}
      class={`${baseClasses} ${props.isActive ? activeClasses : ''} ${props.isDisabled ? disabledClasses : ''}`}
    >
      <span class={`text-2xl text-slate-200`}>{props.time}</span>
      <span class={`absolute top-2 left-2 text-sm text-slate-200`}>
        ({props.capacity}/{props.originalCapacity})
      </span>
    </button>
  );
}
