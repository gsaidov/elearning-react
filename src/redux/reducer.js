import { COURSES } from "../shared/courses";
import { REVIEWS } from "../shared/reviews";

export const initialState = {
  courses: COURSES,
  reviews: REVIEWS,
};

export const Reducer = (state = initialState, action) => {
  return state;
};
