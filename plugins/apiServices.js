import axios from 'axios'

const username = 'task@searchandstay.com'
const passw = 'ph37i45K'

const data = {
  login: {
    email: username,
    password: passw,
  },
}

export const getToken = async () => {
  const response = await axios.post(
    'https://sys-dev.searchandstay.com/api/admin/login_json',
    data
  )

  return response.data.data.result.access_token
}

export const getUser = async () => {
  const response = await axios.post(
    'https://sys-dev.searchandstay.com/api/admin/login_json',
    data
  )

  return response.data.success
}
