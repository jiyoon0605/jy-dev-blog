import { tv } from 'tailwind-variants';

export const textInput = tv({
  base: [
    'w-full',
    'font-medium',
    'text-3xl',
    'border-b-2',
    'flex-1',
    'outline-none',
    'p',
    'my-4',
    'dark:bg-black',
    'dark:text-white',
  ],
});

export const summaryInput = tv({
  extend: textInput,
  base: ['font-normal', 'resize-none', 'text-xl'],
});
