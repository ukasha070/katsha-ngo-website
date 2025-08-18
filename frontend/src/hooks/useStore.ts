import { useAppDispatch, useAppSelector } from "./hook";
import type { RootState } from "../store/store";

export function useStore() {
  const appSidebarState = useAppSelector((s: RootState) => s.appSidebar);
  const searchBoxState = useAppSelector((s: RootState) => s.searchForm);
  const dispatch = useAppDispatch();

  return { appSidebarState, searchBoxState, dispatch };
}
