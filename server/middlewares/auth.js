import jwt from 'jsonwebtoken'
export const auth = (req, res, next) => {
    const token = req.headers["token"]
    if (!token) return res.status(401).end()

    jwt.verify(token, "secret", (err, data) => {
        if (err) return res.status(403).send('Unauthorized')
        console.log(data)
        req.id = data.id
        next();
    });
    
}