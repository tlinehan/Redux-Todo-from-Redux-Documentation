import { combineReducers } from 'redux'
import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER, 
    VisibilityFilters 
} from '../actions/actions' 

const { SHOW_ALL } = VisibilityFilters 

// const initialState = {
//     visibiltyFilter: VisibilityFilters.SHOW_ALL,
//     todos: []
// }

function visibiltyFilter (state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo, index ) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
            default:
                return state
    }
}

const todoApp = combineReducers({
    visibiltyFilter,
    todos
})

export default todoApp

// const todoApp = (state, action) => {
    // if (typeof state === 'undefined') {
    //     return initialState 
    // }

//ES6 below
//also can use spread operator to not mutate state
// { ...state, ...newState } 

// const todoApp = (state = initialState, action) => {
//     switch (action.type) {
//         case SET_VISIBILITY_FILTER:
//             return Object.assign({}, state, {
//                 visibiltyFilter: action.filter
//             })
//         case ADD_TODO:
//             return Object.assign({}, state, {
//                 todos: [
//                     ...state.todos,
//                     {
//                         text: action.text,
//                         completed: false
//                     }
//                 ]
//             })
//         case TOGGLE_TODO:
//             return Object.assign({}, state, {
//                 todos: state.todos.map((todo, index) => {
//                     if (index === action.index) {
//                         return Object.assign({}, todo, {
//                             completed: !todo.completed
//                         })
//                     }
//                     return todo
//                 })
//             })
//         default:
//             return state
//     }
// }



