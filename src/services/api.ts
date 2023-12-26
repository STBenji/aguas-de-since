import axios from 'axios'

export class Request {
  private readonly apiRoute = import.meta.env.VITE_API_ROUTE_1

  constructor() {}

  async sendMail(data: object) {
    const url = `${this.apiRoute}/v1/email`
    const response = await axios.post(url, data)

    return response
  }
}
