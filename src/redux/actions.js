export const GET_NUMBER = 'GET_NUMBER';

export const getNumber = (payload) => {
    return {
        type: GET_NUMBER,
        payload
    }
}