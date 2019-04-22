import request from '../utils/request';

export function query() {
  return request('/api/users');
}

export function delay(timeout){
  return new Promise((resolve)=>{
    setTimeout(resolve,timeout)
  })
}