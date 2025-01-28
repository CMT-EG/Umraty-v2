import { ReactNode } from "react";

export type PageHeaderProps = {
  title: string;
  subtitle?: string;
  switchStatus?: ReactNode;
};

export type Option = {
  value: any;
  label: any;
  [key: string]: any;
};

export type ParamsQuery = {
  [key: string]: any;
};
