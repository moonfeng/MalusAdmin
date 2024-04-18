import { request } from '../request';

/** get role list */
export function getSysUserPage(params?: Api.SystemManage.UserSearchParams) {
  return request<Api.SystemManage.UserList>({
    url: '/SysUser/PageList',
    method: 'get',
    params
  });
}
