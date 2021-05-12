import {WeekStepTypes} from '@/redux/entities/weeks/types';

export const courseRoute = (courseId: string) => {
  return `/course/${courseId}`;
};

export const weekRoute = (courseId: string, weekIdx: number) => {
  return `${courseRoute(courseId)}/week/${weekIdx + 1}`;
};

export const lectureRoute = (
  courseId: string,
  weekIdx: number,
  lectureId: string
) => {
  return `${weekRoute(courseId, weekIdx)}/lecture/${lectureId}`;
};

export const readingRoute = (
  courseId: string,
  weekIdx: number,
  readingId: string
) => {
  return `${weekRoute(courseId, weekIdx)}/reading/${readingId}`;
};

export const quizRoute = (
  courseId: string,
  weekIdx: number,
  quizId: string
) => {
  return `${weekRoute(courseId, weekIdx)}/quiz/${quizId}`;
};

export const stepRoute = (
  courseId: string,
  weekIdx: number,
  stepId: string,
  stepType: WeekStepTypes
) => {
  if (stepType === WeekStepTypes.LECTURE) {
    return lectureRoute(courseId, weekIdx, stepId);
  } else if (stepType === WeekStepTypes.READING) {
    return readingRoute(courseId, weekIdx, stepId);
  } else {
    return quizRoute(courseId, weekIdx, stepId);
  }
};
