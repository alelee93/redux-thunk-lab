// write and export your action creator function here
const fetch = require("node-fetch");

fetch('https://learn-co-curriculum.github.io/cat-api/cats.json').then(response => {
    return response.json()
}).then(responseJSON => {
    console.log(responseJSON.images)
})

export const fetchCats = () => {
    return(dispatch) => {
        dispatch({type: 'LOADING_CATS'})
        fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
        .then(response => {
            return response.json()
        }).then(responseJSON => {
            dispatch({type: 'ADD_CATS', cats: responseJSON.images})
        })
    }
}