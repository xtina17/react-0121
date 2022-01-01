export const COUNT_UP = 'COUNT_UP';
export const COUNT_DOWN = 'COUNT_DOWN';

export const upCountAC = () => {
    return {
        type: COUNT_UP
    }
}
export const downCountAC = () => {
    return {
        type: COUNT_DOWN
    }
}