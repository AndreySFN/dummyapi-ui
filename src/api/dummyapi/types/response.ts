export interface List<T> {
  data: Array<T>;
  total: number;
  page: number;
  limit: number;
}

export interface UserPreview {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
}

interface Location {
  street: string;
  city: string;
  state: string;
  country: string;
  timezone: string;
}

interface UserFull {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  dateOfBirth: string;
  registerDate: string;
  phone: string;
  picture: string;
  location: Location;
}

interface PostCreate {
  text: string;
  image: string;
  likes: number;
  tags: Array<string>;
  owner: string;
}

interface PostPreview {
  id: string;
  text: string;
  image: string;
  likes: number;
  tags: Array<string>;
  publishDate: string;
  owner: UserPreview;
}

interface Post {
  id: string;
  text: string;
  image: string;
  likes: number;
  link: string;
  tags: Array<string>;
  publishDate: string;
  owner: UserPreview;
}

interface CommentCreate {
  message: string;
  owner: string;
  post: string;
}

interface Comment
{
  id: string;
  message: string;
  owner: UserPreview;
  post: string;
  publishDate: string;
}
