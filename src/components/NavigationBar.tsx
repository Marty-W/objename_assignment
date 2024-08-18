import { createSignal, createMemo, For, Accessor } from 'solid-js';
import { GenerateDaysReturn } from '../utils/api';
import { NavButton } from './NavButton';
import { NavDayButton } from './NavDayButton';

interface Props {
  days: GenerateDaysReturn;
  selectedDate: Accessor<string>;
  onDateSelect: (date: string) => void;
}

export function NavigationBar(props: Props) {
  const [currentPage, setCurrentPage] = createSignal(1);
  const daysPerPage = 4;

  const visibleDays = createMemo(() => {
    const start = (currentPage() - 1) * daysPerPage;
    const daysToReturn = props.days.slice(start, start + daysPerPage);
    return daysToReturn;
  });

  const goToPreviousPage = () => {
    if (currentPage() > 1) setCurrentPage(currentPage() - 1);
  };

  const goToNextPage = () => {
    if (currentPage() * daysPerPage < props.days.length)
      setCurrentPage(currentPage() + 1);
  };

  return (
    <div class="flex gap-x-2">
      <NavButton
        handleClick={goToPreviousPage}
        isDisabled={currentPage() === 1}
        orientation="left"
      />
      <For each={visibleDays()}>
        {(day) => (
          <NavDayButton
            handleClick={() => props.onDateSelect(day.date)}
            date={day.date}
            isActive={props.selectedDate() === day.date}
          >
            {day.formattedDate}
          </NavDayButton>
        )}
      </For>
      <NavButton
        handleClick={goToNextPage}
        isDisabled={currentPage() * daysPerPage >= props.days.length}
        orientation="right"
      />
    </div>
  );
}
