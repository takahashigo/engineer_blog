import { format } from 'date-fns';

export const convertDate = (date: Date) => {
  return format(date, 'yyyy年MM月dd日');
};
