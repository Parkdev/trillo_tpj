import { useState, useCallback } from "react";

import { ActionState, FieldErrors } from "@lib/create-safe-action";

type Action<TInput, TOutput> = (
  date: TInput
) => Promise<ActionState<TInput, TOutput>>;

interface UseActionOptions<TOutput> {
  onSuccess?: (data: TOutput) => void;
  onError?: (error: string) => void;
  onComplete?: () => void;
}

export const useAction = <TInput, TOutput>(
  action: Action<TInput, TOutput>,
  options: UseActionOptions<TOutput> = {}
) => {
  const [fieldErrors, setFieldErrors] = useState<
    FieldErrors<TInput> | undefined
  >(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const [data, setData] = useState<TOutput | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const execute = useCallback(
    async (input: TInput) => {
      setIsLoading(true);

      try {
        const result = await action(input);

        if (!result) {
          // 결과가 없으면 무시
          return;
        }

        if ((result, fieldErrors)) {
          // 필드 에러
          setFieldErrors(result.FieldErrors);
          options.onError?.(result.error);
        }

        if (result.error) {
          // 서버 에러
          setError(result.error);
          options.onSuccess?.(result.data);
        }

        if (result.data) {
          // 성공
          setData(result.data);
          options.onSuccess?.(result.data);
        }
      } finally {
        setIsLoading(false);
        options.onComplete?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [action, options]
  );

  return {
    execute,
    fieldErrors,
    error,
    data,
    isLoading,
  };
};
