import {PaginationResponse, Response, ReturnMap} from '@/model';
import { PostDetail, PostItemInfo, Tag } from '@/model/blog';
import client from '@/lib/client';

export const getPaginatedPost = (
  page: number,
  pageSize: number,
  sort: string = 'createdAt',
): Promise<PaginationResponse<PostItemInfo[]>> => {
  return client.get(
    `/api/posts?sort[0]=${sort}:desc&populate[0]=thumbnail&populate[1]=tags&pagination[1]=${page}&pagination[0]=${pageSize}`,
  );
};

export const getPostDetail = (slug: string): Promise<Response<PostDetail>> => {
  return client.get(
    `/api/posts/${slug}?populate[0]=thumbnail&populate[1]=tags`,
  );
};

export const getTags = (): Promise<PaginationResponse<Tag[]>> => {
  return client.get('/api/tags')
};

export const createNewPost = (data: ReturnMap<PostDetail>) : Promise<any> => {
  return client.post('/api/posts', data, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${ process.env.NEXT_PUBLIC_ADMIN_KEY}`
    }
  });
}