import axios from 'axios'

const client = axios.create({
  baseURL: 'https://quartermaster-backend.herokuapp.com/api/',
  json: true
})

class requestHandler {
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
}

export class API extends requestHandler {
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
}

export class AUTH extends requestHandler {
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
