import { For, Accessor, createResource, Show } from 'solid-js';
import { getTimesForDate } from '../utils/api';
import { TimeSlot } from './Timeslot';

interface Props {
  selectedDate: Accessor<string>;
  selectedTime: Accessor<string>;
  onTimeSelect: (time: string) => void;
}

export function TimeList(props: Props) {
  // eslint-disable-next-line -- Doesn't work with props.selectedDate()
  const [apiResponse] = createResource(
    props.selectedDate,
    getTimesForDate,
  );

  return (
    <Show
      when={!apiResponse.loading}
      fallback={
        <div class="text-center text-white">
          Loading time slots...
        </div>
      }
    >
      <Show
        when={apiResponse()?.Status === 'OK'}
        fallback={
          <div class="text-center text-red-500">
            Error loading time slots
          </div>
        }
      >
        <div class="grid auto-cols-auto grid-cols-3 gap-4">
          <For each={apiResponse()?.Data}>
            {(time) => (
              <TimeSlot
                handleClick={() => props.onTimeSelect(time.hour)}
                isActive={props.selectedTime() === time.hour}
                isDisabled={time.originalCapacity - time.capacity < 1}
                capacity={time.capacity}
                originalCapacity={time.originalCapacity}
                time={time.hour}
              />
            )}
          </For>
        </div>
      </Show>
    </Show>
  );
}
