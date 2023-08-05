import React, { useState } from 'react'

const Hoc = (WrappedComp) => {
function Counter(props){
    const[count,setCount]=useState(0)
    console.log("setstate",setCount)
        function handleCount(){
            setCount(count+1)
        }
        return(
            <div>
                <WrappedComp handleCount={handleCount} count={count} {...props}></WrappedComp>
            </div>
        )

}
return Counter//now this Counter will also return </WrappedComp>
}

export default Hoc