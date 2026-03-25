// could be Server actions
export const loginUser = async (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "user" && password === "secret123") {
                resolve({
                    success: true,
                    data: {
                        username,
                        email: "user@adobe.com",
                        token:
                            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30",
                    },
                });
            } else {
                reject({ success: false, error: "Invalid credentials." });
            }
        }, 1000);
    });
};