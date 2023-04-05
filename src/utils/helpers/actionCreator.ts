const actionCreator = <T>(type: string, payload?: T) => {
    return {type, payload};
};
export type actionType<T> = {
    readonly type: string,
    readonly payload?: T
};

export default actionCreator;