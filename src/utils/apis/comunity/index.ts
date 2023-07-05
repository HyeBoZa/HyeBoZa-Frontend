import instance from "../../axios";

export interface ContentResponseDto {
  content: string;
  id: number;
  title: string;
}

export interface ContentListResponseDto {
  board_list: ContentResponseDto[];
}

export const getSearchContentList = async (title: string) => {
  const response = await instance.get<ContentListResponseDto>(
    `/board/search?title=${title}`
  );
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
  const response = await instance.get<ContentListResponseDto>(`/board`);
  return response.data;
};
