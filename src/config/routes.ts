export const ROOT = '/';
export const SIGN_UP = '/sign-up';
export const SIGN_IN = '/sign-in';
export const SIGN_OUT = '/sign-out';
export const VERIFY_EMAIL = '/verify-email';
export const PROFILE = '/profile';
export const SETTINGS = '/settings';
export const SEARCH = '/search';
export const MY_COURSES = '/my-courses';
export const COURSE = '/course/:courseId';
export const WEEK = `${COURSE}/week/:week1bIdx`;
export const LECTURE = `${WEEK}/lecture/:lectureId`;
export const READING = `${WEEK}/reading/:readingId`;
export const QUIZ = `${WEEK}/quiz/:quizId`;
export const NOT_FOUND = '/404';
