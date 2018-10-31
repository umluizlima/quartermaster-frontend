import axios from 'axios'

const client = axios.create({
  baseURL: 'https://ic-cdg-hub.herokuapp.com/api/',
  json: true
})

export default class API {
  constructor (resource) {
    this.resource = resource
  }

  async execute (method, resource, data) {
    let accessToken = localStorage.getItem('token') || ''
    return client({
      method,
      url: resource,
      data,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
    })
  }

  get () {
    return this.execute('get', this.resource)
  }

  getOne (id) {
    return this.execute('get', `${this.resource}/${id}`)
  }

  getAll () {
    return this.execute('get', `${this.resource}/all`)
  }

  create (data) {
    return this.execute('post', `${this.resource}`, data)
  }

  update (id, data) {
    return this.execute('put', `${this.resource}/${id}`, data)
  }

  del (id) {
    return this.execute('delete', `${this.resource}/${id}`)
  }

  login (data) {
    return this.execute('post', '/login', data)
  }

  logout () {
    return this.execute('get', '/logout')
  }

  changePassword (data) {
    return this.execute('put', '/changepassword', data)
  }
}
