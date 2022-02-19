import axios from "axios"

export async function login(user) {
    const res = await axios.post("https://ecourse.cpe.ku.ac.th/exceed12/api/token", user)
    return res.data
  }

export async function register(user) {
    const res = await axios.post("", user)
    return res.data
}