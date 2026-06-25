const requiredEnvVars = [
    "NODE_ENV",
    "LIVE_BASE_URL",
    "BASE_URL",
    "MONGODB_URI",
    "JWT_SECRET",
    "EMAIL_USER",
    "EMAIL_PASS",
    "TOKEN_EXPIRE",
    "GROQ_API_KEY",
]

requiredEnvVars.forEach((e) => {
    if(!process.env[e]){
        throw new Error(
            `${e} is Missing in .env`
        )
    }
})

export {}