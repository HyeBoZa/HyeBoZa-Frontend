import { BenefitContentResponseDto } from "../../../model/benefit";
import instance from "../../axios";

interface BenefitListType {
  benefit_list: BenefitContentResponseDto[];
}

export const getCategoryBenefit = async (category: string) => {
  const response = await instance.get<BenefitListType>(
    `/benefit?user=${category}`
  );
  return response.data;
};

export const getDetailBenefit = async (id: number) => {
  const response = await instance.get(`/benefit/${id}`);
  return response.data;
};
