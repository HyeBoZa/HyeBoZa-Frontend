import {
  BenefitContentResponseDto,
  DetailBenefitResponseDto,
} from "../../../model/benefit";
import instance from "../../axios";

interface BenefitListType {
  benefit_list: BenefitContentResponseDto[];
}

interface BenefitListRequestDto {
  category: string;
  benefit: string;
  title: string;
}

export const getCategoryBenefit = async (request: BenefitListRequestDto) => {
  const response = await instance.get<BenefitListType>(
    `/benefit?user=${request.category}&benefit=${request.benefit}&title=${request.title}`
  );
  return response.data;
};

export const getDetailBenefit = async (id: number) => {
  const response = await instance.get<DetailBenefitResponseDto>(
    `/benefit/${id}`
  );
  return response.data;
};
