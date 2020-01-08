import React, {createContext, createState, useState} from 'react'

export const ChangeComponent = createContext();

const ChangeComponentProvider = ({children}) => {

    const [component, setComponent] = useState(true)

    return (
        <ChangeComponent.Provider value={{component, setComponent}}>
            {children}
        </ChangeComponent.Provider>
    )
}

export default ChangeComponentProvider
