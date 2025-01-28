import { ParamsQuery } from "@/global/types/CommonTypes";
import { toQueryString } from "@/global/utils/queryUtils";
import { AddPermission } from "./PermissionTypes";
import axios from "axios";

class PermissionManager {
  static async getAllPermissions(params: ParamsQuery) {
    return (await axios.get(`/permission?${toQueryString(params)}`)).data;
  }

  static async getAllLookUpPermissions(params: ParamsQuery) {
    return (await axios.get(`/lookup/permission?${toQueryString(params)}`))
      .data;
  }

  static async getPermission(id: string) {
    return (await axios.get(`/permission/${id}`)).data;
  }

  static async addPermission(body: AddPermission) {
    return (await axios.post(`/permission`, body)).data;
  }

  static async updatePermission(id: string, body: Partial<AddPermission>) {
    return (await axios.patch(`/permission/${id}`, body)).data;
  }

  static async deletePermission(id: string) {
    return (await axios.delete(`/permission/${id}`)).data;
  }
}

export default PermissionManager;
