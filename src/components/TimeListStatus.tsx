import { ParentProps } from 'solid-js';

export function TimeListStatus(props: ParentProps) {
  return (
    <div class="text-center text-slate-400 text-3xl mt-4">
      {props.children}
    </div>
  );
}
