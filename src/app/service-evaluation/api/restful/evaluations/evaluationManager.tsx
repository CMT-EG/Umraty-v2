import { ParamsQuery } from "@/global/types/CommonTypes";
import { AddEvaluation } from "./EvaluationTypes";
import axios from "axios";
import { toQueryString } from "@/global/utils/queryUtils";

class EvaluationManager {
  static async getAllEvaluations(params: ParamsQuery) {
    return (await axios.get(`/evaluation?${toQueryString(params)}`)).data;
  }

  static async getAllLookUpEvaluations(params: ParamsQuery) {
    return (await axios.get(`/lookup/evaluation?${toQueryString(params)}`))
      .data;
  }

  static async getEvaluation(id: string) {
    return (await axios.get(`/evaluation/${id}`)).data;
  }

  static async addEvaluation(body: AddEvaluation) {
    return (await axios.post(`/evaluation`, body)).data;
  }

  static async updateEvaluation(id: string, body: Partial<AddEvaluation>) {
    return (await axios.patch(`/evaluation/${id}`, body)).data;
  }

  static async deleteEvaluation(id: string) {
    return (await axios.delete(`/evaluation/${id}`)).data;
  }
}

export default EvaluationManager;
