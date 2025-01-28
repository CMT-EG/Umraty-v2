import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  PermissionById,
  GetAllpermission,
  AddPermission,
} from "./PermissionTypes";
import PermissionManager from "./permissionManager";
import { ParamsQuery } from "@/global/types/CommonTypes";

// Fetch all permission
export const useGetAllPermissions = (
  params: ParamsQuery,
  active: boolean = true
) => {
  const fetchAllPermission = async () => {
    if (!active) return null; // If no ID is provided, return null
    return await PermissionManager.getAllPermissions(params);
  };

  return useQuery<GetAllpermission>({
    queryKey: ["permission", params, active],
    queryFn: fetchAllPermission,
    enabled: !!active,
    retry: false,
  });
};

export const useGetAllLookUpPermissions = (
  params: ParamsQuery,
  active: boolean = true
) => {
  const fetchAllServices = async () => {
    if (!active) return null; // If no ID is provided, return null
    return await PermissionManager.getAllLookUpPermissions(params);
  };

  return useQuery<GetAllpermission>({
    queryKey: ["permission", params, active],
    queryFn: fetchAllServices,
    enabled: !!active,
    retry: false,
  });
};

// Fetch a single permission
export const useGetPermission = (id: string, active: boolean = true) => {
  return useQuery<PermissionById>({
    queryKey: ["permission", id, active],
    queryFn: () => PermissionManager.getPermission(id),
    enabled: !!id && !!active, // Enable query only if id is provided
    retry: false,
  });
};

// Add a new permission
export const useAddPermission = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: PermissionManager.addPermission,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["permission"] });
    },
    retry: false,
  });
};

// Update a permission
export const useUpdatePermission = (idP?: string) => {
  const queryClient = useQueryClient();
  let idInvalid = idP;
  return useMutation({
    mutationFn: (body: Partial<AddPermission>) => {
      body?.id && (idInvalid = body?.id);
      return PermissionManager.updatePermission(idInvalid as string, body);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["permission"] });
      queryClient.invalidateQueries({ queryKey: ["permission", idInvalid] });
    },
    retry: false,
  });
};

// Delete a permission
export const useDeletePermission = (idP?: string) => {
  const queryClient = useQueryClient();
  let idInvalid = idP;
  return useMutation({
    mutationFn: ({ id }: { id: string }) => {
      id && (idInvalid = id);
      return PermissionManager.deletePermission(idInvalid as string);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["permission"] });
    },
    retry: false,
  });
};
