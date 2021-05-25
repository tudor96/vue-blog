import { posts } from './posts';
// import { account } from './account';

export const apiFactory = () => ({
  data: {
    posts: () => posts(),
    // account: () => account(),
  },
});

export type ApiFactory = ReturnType<typeof apiFactory>;