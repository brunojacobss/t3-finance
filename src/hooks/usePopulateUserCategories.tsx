import { useEffect } from "react";
import { api } from "~/utils/api";

export const usePopulateUserCategories = () => {
  const { data: userCategories, isLoading: isLoadingCategories } =
    api.userCategory.getCategories.useQuery();
  const { mutate, isLoading: isPopulating } =
    api.userCategory.populateCategories.useMutation();

  useEffect(() => {
    if (userCategories && userCategories.length === 0) {
      mutate();
    }
  }, [mutate, userCategories]);

  const isLoading = isLoadingCategories || isPopulating;

  return { isLoading };
};
