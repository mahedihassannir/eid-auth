import React, { createContext } from 'react';

import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import app from './firebase.confg';

let auth = getAuth(app)


export let econtex = createContext(null)



const Contex = ({ children }) => {




    let handleRes = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)
    }


    let userInfo = {
        handleRes,


    }

    return <econtex.Provider value={userInfo}>
        {children}
    </econtex.Provider>
};

export default Contex;