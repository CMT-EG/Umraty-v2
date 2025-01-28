export type PermissionLookUp = {
  id?: string;
  _id?: string;
  name_ar?: string;
  name_en?: string;
  active?: boolean;
  serial?: number;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
};

export type GetpermissionLookUp = {
  result: number;
  pages: number;
  total: number;
  data: PermissionLookUp[];
};

export type Permission = {
  id?: string;
  _id?: string;
  name_ar?: string;
  name_en?: string;
  active?: boolean;
  serial?: number;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
};

export type GetAllpermission = {
  result: number;
  pages: number;
  total: number;
  data: Permission[];
};

export type PermissionDialogProps = {
  permission: Permission;
};

export type AddPermission = {
  id?: string;
  _id?: string;
  name_ar?: string;
  name_en?: string;
  short_name_ar?: string;
  short_name_en?: string;
  description?: string | null;
  permission_type?: string | null;
  default_user?: string | null;
  serial?: number;
  createdAt?: string;
  updatedAt?: string;
};

export type PermissionById = {
  data: Permission;
};

export type permission = Permission[];
