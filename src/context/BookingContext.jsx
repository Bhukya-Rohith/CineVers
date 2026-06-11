import { createContext, useContext, useMemo, useState } from 'react';

const BookingContext = createContext(null);

const defaultState = {
  movie: null,
  location: 'Hyderabad',
  theatre: null,
  screen: null,
  showtime: null,
  seats: [],
  bookingId: 'CV-2026-89021',
};

export function BookingProvider({ children }) {
  const [booking, setBooking] = useState(defaultState);

  const value = useMemo(
    () => ({
      booking,
      setBooking: (patch) => setBooking((prev) => ({ ...prev, ...patch })),
      resetBooking: () => setBooking(defaultState),
    }),
    [booking]
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within BookingProvider');
  }
  return context;
}
