import { getISOWeek } from 'date-fns'

export const getWeekNumber = (date) => getISOWeek(date)

export const getWeekName = (weekNumber) => (weekNumber % 2 === 0 ? "A" : "B")