import ky from 'ky'

const firebaseApi = ky.create({ prefixUrl: import.meta.env.VITE_FIREBASE_API })

export const sendUser = (data) => {
    return firebaseApi.post('users.json', { json: data })
}

export const getUser = (object) => {
    return firebaseApi.get(object + '.json')
}
