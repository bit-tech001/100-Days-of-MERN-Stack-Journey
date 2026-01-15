import React, { useEffect, useState } from 'react'
import axios from 'axios'

const JokesApp = () => {
  const [jokes, setJokes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('/api/jokes')
      .then(res => {
        setJokes(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  return (
    <div className="min-h-screen bg-white px-5 py-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-black">
            Jokes Hub 😂
          </h1>
          <p className="mt-2 text-green-600 font-semibold">
            Total Jokes: {jokes.length}
          </p>
        </header>

        {/* Loading */}
        {loading && (
          <p className="text-center text-gray-500">
            Fetching jokes...
          </p>
        )}

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {jokes.map((joke, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 p-5
                         bg-white shadow-sm
                         hover:shadow-md hover:border-green-500
                         transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs px-3 py-1 rounded-full
                                 bg-green-100 text-green-700 font-medium">
                  {joke.category}
                </span>
                <span className="text-xs text-gray-400">
                  #{index + 1}
                </span>
              </div>

              <p className="text-gray-800 leading-relaxed">
                {joke.joke}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default JokesApp
