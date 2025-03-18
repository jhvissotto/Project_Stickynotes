import bcrypt from 'bcryptjs' 


export function bcrypt_hash(password:string) {
    const hashed = bcrypt.hashSync(password, bcrypt.genSaltSync())
    return { hashed }
}


export function bcrypt_check(password:string, hashed:string) {
    const isMatch = bcrypt.compareSync(password, hashed)
    return { isMatch }
}