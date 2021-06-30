

export const PARAMS = {
  POST: {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
  },
  GET: {  
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: 'include'
  },
};

const fetch = ({url, params}={}) => {
  if (!url) throw new Error('url is necessary')
  return window.fetch(url, params ?? {})
    .then(response => response.status === 204 ? {code: 204} : response.json())
    .then(data => {
      if (data.message) data.error = true
      return data
    })
    .catch(console.error)
}


export default fetch