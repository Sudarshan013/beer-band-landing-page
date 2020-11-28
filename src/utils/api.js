
const errorInFetch = {
  status: "failed",
}

export const apiGet = async (url) => {
  try {
    const response = await fetch(url)
    if (response.status > 400) {
      return errorInFetch
    }
    const data = response.json()
    return data
  }
  catch (err) {
    return errorInFetch 
  }
}

export const apiPost = async (url, params) => {
  try {
    const response = await fetch(url, params)
    console.log(response)
    return response
  } catch (err) {
    return {
      status: "failed",
    }
  }
}