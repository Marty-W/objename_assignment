export interface TimeSlot {
  hour: string;
  capacity: number;
  originalCapacity: number;
}

export interface Day {
  date: string;
  formattedDate: string;
}

export interface ApiResponse {
  Status: string;
  Message: string;
  Data: TimeSlot[];
}
