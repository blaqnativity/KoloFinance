import {
  startOfDay,
  startOfYear,
  startOfMonth,
  endOfDay,
  endOfYear,
  endOfMonth,
  sub,
} from "date-fns";
import { computed, ref } from "vue";

export const useSelectedTimePeriod = (period, offset = 3) => {
  const periodRef = ref(period);

  const current = computed(() => {
    switch (periodRef.value) {
      case "Yearly":
        return {
          from: startOfYear(new Date()),
          to: endOfYear(new Date()),
        };
      case "Monthly":
        return {
          from: startOfMonth(new Date()),
          to: endOfMonth(new Date()),
        };
      case "Daily":
        return {
          from: startOfDay(new Date()),
          to: endOfDay(new Date()),
        };
    }
  });

  const previous = computed(() => {
    switch (periodRef.value) {
      case "Yearly":
        return {
          from: startOfYear(sub(new Date(), { years: offset })),
          to: endOfYear(sub(new Date(), { years: offset })),
        };
      case "Monthly":
        return {
          from: startOfMonth(sub(new Date(), { months: offset })),
          to: endOfMonth(sub(new Date(), { months: offset })),
        };
      case "Daily":
        return {
          from: startOfDay(sub(new Date(), { days: offset })),
          to: endOfDay(sub(new Date(), { days: offset })),
        };
    }
  });

  return { current, previous };
};
