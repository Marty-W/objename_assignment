import { Chevron } from './Chevron';

interface Props {
  isDisabled: boolean;
  orientation: 'left' | 'right';
  handleClick: () => void;
}

export function NavButton(props: Props) {
  const baseClasses =
    'bg-slate-300 rounded-2xl bg-opacity-20 px-4 py-2';
  const disabledClasses = 'opacity-20';

  return (
    <button
      disabled={props.isDisabled}
      class={`${baseClasses} ${props.isDisabled ? disabledClasses : ''}`}
      onClick={() => props.handleClick()}
    >
      <Chevron orientation={props.orientation} />
    </button>
  );
}
