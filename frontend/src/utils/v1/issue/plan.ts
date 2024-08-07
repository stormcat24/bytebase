import type { Plan_Spec } from "@/types/proto/v1/plan_service";

export const sheetNameOfSpec = (spec: Plan_Spec): string => {
  return spec.changeDatabaseConfig?.sheet ?? spec.exportDataConfig?.sheet ?? "";
};
