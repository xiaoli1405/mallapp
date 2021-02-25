import axios from 'axios'

//ES6 Promise的封装
export function request(options) {
  return new Promise((resolve, reject) => {
    //1.创建axios的实例对象
    const instance = axios.create({
      baseURL: '',
      timeout: 5000
    })
  })
}
