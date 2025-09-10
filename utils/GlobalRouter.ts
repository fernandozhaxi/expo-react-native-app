// utils/GlobalRouter.ts

let router: any = null;

export const setRouter = (r: any) => {
  router = r;
};

export const pushLogin = () => {
  console.log('pushLogin')
  if (router) {
    router.push('/');
  }
};
