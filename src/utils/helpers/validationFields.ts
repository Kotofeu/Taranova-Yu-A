const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
export const emailValidation = (email: string) => {
    if (!EMAIL_REGEXP.test(email) || !email){
        return false         
    }
    return true
}