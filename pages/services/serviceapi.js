export async function fetchData() {
    const response = await fetch('https://sys-dev.searchandstay.com/api/admin/login_json')
    const data = await response.json()
    return data
  }
  