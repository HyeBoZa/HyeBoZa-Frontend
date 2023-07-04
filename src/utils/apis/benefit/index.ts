import instance from "../../axios";

export const getCategoryBenefit = async (category: string) => {
  const response = await instance.get(`/benefit?user=${category}`);
  return response.data;
};

export const getDetailBenefit = async (id: number) => {
  const response = await instance.get(`/benefit/${id}`);
  return response.data;
};
