const actionCreator = <T>(type: string, payload: T) => {
    return {type, payload};
};

export default actionCreator;