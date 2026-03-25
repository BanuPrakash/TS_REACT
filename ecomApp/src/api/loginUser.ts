// could be server action
export type LoginSuccess = {
    success: true;
    data: {
        username: string,
        email :string,
        token: string
    }
}

export type LoginFailure = {
    success: false,
    error: string
}

export type LoginResponse = LoginSuccess | LoginFailure

// server action
export const loginUser = async (username: string, password:string):Promise<LoginResponse> => {
    return new Promise(resolve => {
        setTimeout(() => {
            if(username === 'user' && password === 'secret123') {
                resolve({
                    success:true,
                    data: {
                        username,
                        email: "user@adobe.com",
                        token: "evdreesdf%sdfdffgd2sdgd"
                    }
                })
            } else {
                resolve({
                    success: false,
                    error: "Invalid Credentials!!!"
                })
            }
        }, 1000)
    })
}