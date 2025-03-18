import type { NextApiRequest, NextApiResponse } from 'next'


type Res = { test:boolean }

export default function handler(req:NextApiRequest, res:NextApiResponse<Res>) {
    return res.status(200).json({ test:true })
}
