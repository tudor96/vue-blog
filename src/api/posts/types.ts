import { AxiosResponse } from "axios";

export interface Post {
	id: number;
	title: string;
	body: string;
}

export interface PostsRequest extends AxiosResponse {
	data: Post[];
}

export interface PostRequest extends AxiosResponse {
	data: Post;
}
