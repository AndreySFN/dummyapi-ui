import {Paging} from "./types/headers";
import {List, UserPreview} from "./types/response";

class CommonController {
  private appId: string;

  constructor(appId: string) {
    this.appId = appId;
  }

  private BASE_URL = 'https://dummyapi.io/data/v1';

  protected doGetRequest<T>(
    url: string,
    params: Record<string, string>,
    callback: (response: T) => void,
    errorCallback?: (response: T) => void,
    finalCallback?: () => void) {
    const requestUrl = new URL(`${this.BASE_URL}${url}`);
    requestUrl.search = new URLSearchParams(params).toString()
    fetch(requestUrl.toString(), {
      method: 'GET',
      headers: {
        'app-id': this.appId
      }
    })
      .then(response => response.json())
      .then(callback)
      .catch(errorCallback)
      .finally(finalCallback)
  }
}

class UserController extends CommonController {
  private GET_LIST_URL = '/user'

  constructor(appId: string) {
    super(appId);
  }

  getCount(
    callback: (total: number) => void,
    errorCallback?: (response: List<UserPreview>) => void,
    finalCallback?: () => void
  ) {
    this.getList(
      {page: 0, limit: 0},
      (response) => callback(response.total),
      errorCallback,
      finalCallback
    )
  }

  getList(
    paging: Paging,
    callback: (response: List<UserPreview>) => void,
    errorCallback?: (response: List<UserPreview>) => void,
    finalCallback?: () => void,
  ) {
    this.doGetRequest(
      this.GET_LIST_URL,
      {
        page: paging.page.toString(),
        limit: paging.limit.toString(),
      },
      callback,
      errorCallback,
      finalCallback
    )
  }
}

export default new UserController('617b11efbdaa719034cf6d83');
