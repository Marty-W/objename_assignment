import { ParentComponent } from 'solid-js';

interface Props {
  handleClick: () => void;
  isActive: boolean;
  date: string;
}

export const NavDayButton: ParentComponent<Props> = (props) => {
  const baseClasses = 'flex-1 rounded-2xl text-lg';
  const activeClasses = 'bg-[#DBA02F] text-slate-100';
  const inactiveClasses = 'bg-slate-300 bg-opacity-20 text-slate-400';

  return (
    <button
      onClick={() => props.handleClick()}
      class={`${baseClasses} ${props.isActive ? activeClasses : inactiveClasses}`}
    >
      {props.children}
    </button>
  );
};
