import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  EvaluationById,
  GetAllevaluation,
  AddEvaluation,
} from "./EvaluationTypes";
import EvaluationManager from "./evaluationManager";
import { ParamsQuery } from "@/global/types/CommonTypes";

// Fetch all evaluation
export const useGetAllEvaluations = (
  params: ParamsQuery,
  active: boolean = true
) => {
  const fetchAllEvaluation = async () => {
    if (!active) return null; // If no ID is provided, return null
    return await EvaluationManager.getAllEvaluations(params);
  };

  return useQuery<GetAllevaluation>({
    queryKey: ["evaluation", params, active],
    queryFn: fetchAllEvaluation,
    enabled: !!active,
    retry: false,
  });
};

export const useGetAllLookUpEvaluations = (
  params: ParamsQuery,
  active: boolean = true
) => {
  const fetchAllServices = async () => {
    if (!active) return null; // If no ID is provided, return null
    return await EvaluationManager.getAllLookUpEvaluations(params);
  };

  return useQuery<GetAllevaluation>({
    queryKey: ["evaluation", params, active],
    queryFn: fetchAllServices,
    enabled: !!active,
    retry: false,
  });
};

// Fetch a single evaluation
export const useGetEvaluation = (id: string, active: boolean = true) => {
  return useQuery<EvaluationById>({
    queryKey: ["evaluation", id, active],
    queryFn: () => EvaluationManager.getEvaluation(id),
    enabled: !!id && !!active, // Enable query only if id is provided
    retry: false,
  });
};

// Add a new evaluation
export const useAddEvaluation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: EvaluationManager.addEvaluation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["evaluation"] });
    },
    retry: false,
  });
};

// Update a evaluation
export const useUpdateEvaluation = (idP?: string) => {
  const queryClient = useQueryClient();
  let idInvalid = idP;
  return useMutation({
    mutationFn: (body: Partial<AddEvaluation>) => {
      if (body?.id) {
        idInvalid = body?.id;
      }
      return EvaluationManager.updateEvaluation(idInvalid as string, body);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["evaluation"] });
      queryClient.invalidateQueries({ queryKey: ["evaluation", idInvalid] });
    },
    retry: false,
  });
};

// Delete a evaluation
export const useDeleteEvaluation = (idP?: string) => {
  const queryClient = useQueryClient();
  let idInvalid = idP;
  return useMutation({
    mutationFn: ({ id }: { id: string }) => {
      if (id) {
        idInvalid = id;
      }
      return EvaluationManager.deleteEvaluation(idInvalid as string);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["evaluation"] });
    },
    retry: false,
  });
};
