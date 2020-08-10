export interface PostDir {
  postDirId: number;
  userNo: number;
  postDirName: string;
  postList: Post[];
}

export interface Post {
  postId: number;
  userNo: number;
  postDirId: number;
  postTitle: string;
  postContent: string;
  postDate: string;
  postFavorite: boolean;
  tagList: Tag[];
}

export interface Tag {
  postTagId: number;
  postId: number;
  tagName: string;
}

export interface Context {
  showCtx: boolean;
  x: number;
  y: number;
}

export interface MypageModule {
  isSidebarActive: boolean;
  isCreateFolderModalActive: boolean;
  postDirList: PostDir[];
  postDir: Post[];
  post: Post | null;
  postDirId: number | null;
  postId: number | null;
  postDirName: string | null;
  postDirContextMenu: Context;
  postContextMenu: Context;
}
