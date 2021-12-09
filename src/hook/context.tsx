import { createContext, ReactNode, useState } from 'react'

interface ContextProvider {
    children: ReactNode
}

export const HookContext = createContext({})

export function ContextsProvider({children}: ContextProvider){

    const [selectedGenreId, setSelectedGenreId] = useState(1);

    function handleClickButton(id: number) {
        setSelectedGenreId(id);
      }

    return(
        <HookContext.Provider value={{ 
            handleClickButton, 
            selectedGenreId,
            setSelectedGenreId,
            }}>
      
            {children}
         
        </HookContext.Provider>
            

    )
}



