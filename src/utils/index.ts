type DEBOUNCED_SEARCH_HANDLER_PARAMS = {
  debouncedCallBack: (val: string) => void;
  delay: number;
};

export const debouncedHandler = (params: DEBOUNCED_SEARCH_HANDLER_PARAMS) => {
  const { debouncedCallBack, delay } = params;

  let timer: NodeJS.Timeout | null = null;

  return (val: string) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      debouncedCallBack(val);
    }, delay);
  };
};
