const COMMON = {
  login: 'POST,/api/login',
  logout: 'POST,/api/logout'
};
const USER = {
  getUserList: 'GET,/api/user', // 获取用户列表
  createUser: 'POST,/api/user', // 创建用户
  getUserDetail: 'GET,/api/user/{id}', // 获取用户详情
  updateUser: 'PUT,/api/user/{id}', // 更新用户信息
  deleteUser: 'DELETE,/api/user/{id}', // 删除用户
  setUserStatus: 'PUT,/api/user/{id}/status' //设置用户状态(激活或冻结)
};
export default Object.assign(COMMON, USER);
