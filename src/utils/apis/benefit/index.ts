import instance from "../../axios";

export const getCategoryBenefit = async (user: string) => {
  const response = await instance.get(`/benefit?user=${user}`);
  return response.data;
};

export const getDetailBenefit = async (id: number) => {
  const response = await instance.get(`/benefit/${id}`);
  return response.data;
};
