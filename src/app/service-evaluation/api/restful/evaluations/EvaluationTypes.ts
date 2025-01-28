export type EvaluationLookUp = {
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

export type GetevaluationLookUp = {
  result: number;
  pages: number;
  total: number;
  data: EvaluationLookUp[];
};

export type Evaluation = {
  id?: string;
  _id?: string;
  fullName?: string;
  nationality?: string;
  phone?: string;
  idType?: string;
  idNumber?: string;
  idImage?: string;
  relativePhone?: string;
  address?: string;
  evaluationLicenseImage?: string;
  status?: "active" | "vacation" | "cancelled";
  serial?: number;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
};

export type GetAllevaluation = {
  result: number;
  pages: number;
  total: number;
  data: Evaluation[];
};

export type EvaluationDialogProps = {
  evaluation: Evaluation;
};

export type AddEvaluation = {
  id?: string;
  _id?: string;
  name_ar?: string;
  name_en?: string;
  short_name_ar?: string;
  short_name_en?: string;
  description?: string | null;
  evaluation_type?: string | null;
  default_user?: string | null;
  serial?: number;
  createdAt?: string;
  updatedAt?: string;
};

export type EvaluationById = {
  data: Evaluation;
};

export type evaluation = Evaluation[];
