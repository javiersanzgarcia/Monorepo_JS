import React from 'react'

type CardProps = {
  username: string
  password: string
}

const Card = ({ username, password }: CardProps) => (
  <div className="px-6 py-4">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-5">
      {username}
    </span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-5">
      {password}
    </span>
  </div>
)

export default Card
