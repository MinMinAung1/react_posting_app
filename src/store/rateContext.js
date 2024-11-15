import { createContext,useState } from "react";

export const RateContext = createContext({
    rates: [],
    // rating:0,
    totalRate :0,
    addRate:(Post) => {},
    removeRate: (postId) => {},
    isRate: (postId) => {}
})


export function RateContextProvider(props) {
    const [userRates,setUserRate] = useState([])
    // const [userRating,setUserRating] = useState(0)

    function addRate(post) {
        setUserRate((previousRate) => {
            return previousRate.concat(post)
        })
    }

    function removeRate(postId) {
        setUserRate((previousRate) => {
            return previousRate.filter((post) => post.id !== postId)
        })
    }

    function isRate(postId) {
        return userRates.some((post) => post.id === postId)//you can use some or find. some function is return true if your pridicate is true. find function is return true on your predicate.
    }

    const context = {
        rates: userRates,
        // rating:userRating,
        totalRate : userRates.length,
        addRate,
        removeRate,
        isRate,
    }
    
    return (
        <RateContext.Provider value={context}>
            {props.children}
        </RateContext.Provider>
    )
}