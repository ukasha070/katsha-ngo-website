import { useAppDispatch, useAppSelector } from "./hook";
import type { RootState } from "../store/store";

export function useStore() {
  const state: RootState = useAppSelector((s) => s);
  const dispatch = useAppDispatch();

  return { state, dispatch };
}
