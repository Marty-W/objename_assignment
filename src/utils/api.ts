import { ApiResponse, Day, TimeSlot } from './types';

export function generateDays(daysAhead: number): Day[] {
  const days = [];
  const today = new Date();

  for (let i = 0; i < daysAhead; i++) {
    const currentDate = new Date(today);
    currentDate.setDate(currentDate.getDate() + i);

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');

    const date = `${year}-${month}-${day}`;
    let formattedDate;

    if (i === 0) {
      formattedDate = `Dnes ${day}.${month}.`;
    } else if (i === 1) {
      formattedDate = `Zítra ${day}.${month}.`;
    } else {
      const dayName = currentDate.toLocaleDateString('cs-CZ', {
        weekday: 'short',
      });
      formattedDate = `${dayName} ${day}.${month}.`;
    }

    days.push({ date, formattedDate });
  }

  return days;
}

// Generate the days once
const DAYS = generateDays(14);

// Cache for time slots
const timeSlotCache = new Map<string, ApiResponse>();

// Generate time slots for a specific date
function generateTimeSlots(startHour = 13, endHour = 23): TimeSlot[] {
  const timeSlots = [];

  for (let i = startHour; i <= endHour; i++) {
    const hour = `${i.toString().padStart(2, '0')}:00`;

    const originalCapacity = Math.floor(Math.random() * 3) + 1;
    const capacity = Math.floor(
      Math.random() * (originalCapacity + 1),
    );

    timeSlots.push({
      hour,
      capacity,
      originalCapacity,
    });
  }

  return timeSlots;
}

// Mock API call to get time slots for a date
export function getTimesForDate(date: string): Promise<ApiResponse> {
  if (timeSlotCache.has(date)) {
    // If data is in cache, return it immediately
    return Promise.resolve(timeSlotCache.get(date)!);
  }

  // If data is not in cache, simulate API call with delay
  return new Promise((resolve) => {
    setTimeout(() => {
      const newData = {
        Status: 'OK',
        Message: 'OK',
        Data: generateTimeSlots(),
      };
      timeSlotCache.set(date, newData);
      resolve(newData);
    }, 500);
  });
}

export function getDays() {
  return DAYS;
}

export type GenerateDaysReturn = typeof DAYS;
