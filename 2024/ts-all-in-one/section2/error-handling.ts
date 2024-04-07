interface Axios {
  get(): Promise<void>;
}

class CustomError extends Error {
  response?: {
    data: any;
  };
}

declare const axios: Axios;

(async () => {
  try {
    const response = await axios.get();
    console.log(response);
  } catch (error) {
    if (error instanceof CustomError) {
      console.error(error.response?.data);
    }
  }
})();
