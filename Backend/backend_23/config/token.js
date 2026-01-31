import jwt from 'jsonwebtoken'

const genretaeToken = (id)=>{
    let token = jwt.sign({id}, process.env.JWT_SECRET ,{expiresIn:"7d"})
    return token
}

export default genretaeToken