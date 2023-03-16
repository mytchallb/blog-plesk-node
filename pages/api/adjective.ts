// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  adjective: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const adjectives = [
    'cute',
    'curious',
    'cuddly',
    'naughty',
    'nice',
    'reflective',
    'silly',
    'sleepy',
    'smart',
    'good at hunting',
  ]
  // Chose a random adjective
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)]

  res.status(200).json({ adjective: adjective })
}
