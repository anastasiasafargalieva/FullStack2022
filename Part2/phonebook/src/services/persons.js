import axios from 'axios';
const baseUrl = '/api/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}


const update = person => {
  const url = `${baseUrl}/${person.id}`
  const request = axios.put(url,person)
  return request.then(response => response.data)
}


const deleteId = personId => {
  const url = `${baseUrl}/${personId}`
  const request = axios.delete(url)
  return request.then(response => response.data)
}

export default { 
  getAll: getAll, 
  create: create, 
  update: update,
  deleteId: deleteId
}