import instance from "../../axios";

export const searchContent = async (title: string) => {
  const response = await instance.get("/board/search", { params: { title } });
  return response.data;
};

export const getDetailContent = async (id: number) => {
  const response = await instance.get(`/board/${id}`);
  return response.data;
};

interface PostContentRequestDto {
  title: string;
  content: string;
}

export const postContent = async (request: PostContentRequestDto) => {
  return await instance.post(`/board`, request);
};

export const getContentList = async () => {
  const response = await instance.get(`/board`);
  return response.data;
};
