interface Props {
  orientation: 'left' | 'right';
}

export function Chevron(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      class={`w-12 h-12 ${props.orientation === 'left' ? 'rotate-0' : 'rotate-180'}`}
    >
      <path
        class="stroke-slate-400"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="0.6"
        d="M10.25 3.75L5.75 8l4.5 4.25"
      />
    </svg>
  );
}
