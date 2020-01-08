const defaultState = [
    {
        id: 1,
        title: 'Login'
    },
    {
        id: 2,
        title: 'image'
    }
];

function reducer(state = defaultState, {type, payload}){
    switch (type){
        default:
            return state;
    }
}

export default reducer;