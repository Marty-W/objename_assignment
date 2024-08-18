import { createSignal, Show } from 'solid-js';
import { NavigationBar } from './components/NavigationBar';
import { TimeList } from './components/TimeList';
import { EmptyTimeList } from './components/EmptyTimeList';
import { getDays } from './utils/api';

function App() {
  const [selectedDate, setSelectedDate] = createSignal('');
  const [selectedTime, setSelectedTime] = createSignal('');

  const days = getDays();

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setSelectedTime('');
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  return (
    <main class="min-h-screen py-4 bg-gradient-to-t from-[#073E55] to-[#17243D] to-20% px-6 flex justify-center">
      <div class="w-full max-w-3xl flex flex-col gap-y-4">
        <NavigationBar
          days={days}
          selectedDate={selectedDate}
          onDateSelect={handleDateSelect}
        />
        <Show when={selectedDate()} fallback={<EmptyTimeList />}>
          <TimeList
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            onTimeSelect={handleTimeSelect}
          />
        </Show>
      </div>
    </main>
  );
}

export default App;
