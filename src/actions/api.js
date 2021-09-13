import axios from "axios";

const baseUrl="https://localhost:44388/api/"

const token=localStorage.getItem('token')

const authAxios=axios.create({
    baseURL:baseUrl,
    headers:{
        Authorization: `Bearer ${token}`
    }
})

export default {

    book(url = baseUrl + 'books/') {
        return {
            fetchAll: () => authAxios.get(url),
            fetchById: id => authAxios.get(url + id),
            create: newRecord => authAxios.post(url, newRecord),
            update: (id, updateRecord) => authAxios.put(url + id, updateRecord),
            delete: id => authAxios.delete(url + id)
        }
    }
}
