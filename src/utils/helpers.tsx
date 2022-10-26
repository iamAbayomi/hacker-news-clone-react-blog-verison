import { QueryKey } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

export const _errorHandler = (err: unknown) => {
  let error: any = err as AxiosError;
  let message = !navigator.onLine
    ? "Please check your internet connection"
    : error?.response.status == 400
    ? "Something went wrond"
    : "";
  return toast.error(message);
};

const onError = (err: any) => {
  _errorHandler(err);
};

export const getQueryPath = (path: string | string[] | undefined) => {
  switch (path) {
    case "news": {
      return setUrlAndQueryKey("topstories", "news");
    }
    case "ask": {
      return setUrlAndQueryKey("askstories", "ask");
    }
    case "show": {
      return setUrlAndQueryKey("showstories", "show");
    }
    case "jobs": {
      return setUrlAndQueryKey("jobstories", "job");
    }
    default:
      return setUrlAndQueryKey("topstories", "news");
      break;
  }
};

export function setUrlAndQueryKey(url: string, queryKey: QueryKey | string) {
  return { url, queryKey };
}
