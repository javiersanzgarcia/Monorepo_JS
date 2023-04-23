import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {
  passwordSelector,
  setPassword,
  setUsername,
  usernameSelector
} from './store/appSlice'
import './index.css'
import Card from './components/Card'

export const App: React.FC = () => {
  const [show, setShow] = useState(false)
  const [beResult, setBeResult] = useState('')

  const dispatch = useDispatch()

  const username = useSelector(usernameSelector)
  const password = useSelector(passwordSelector)
  const baseURL = 'http://localhost:3001/health'

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setBeResult(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value ? e.target.value : ''
    dispatch(setUsername(value))
    setShow(false)
  }

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value ? e.target.value : ''
    dispatch(setPassword(value))
    setShow(false)
  }

  const handleClick = () => {
    if (username && password) {
      setShow(true)
    }
  }

  return (
    <div className="w-full max-w-xs" data-testid="appRender">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {beResult && (
          <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-5">
            {beResult}
          </span>
        )}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            onChange={handleUsername}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            onChange={handlePassword}
          />
          <p className="text-red-500 text-xs italic">
            Please choose a password.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleClick}
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2022 Cognizant Corp. All rights reserved.
      </p>

      {show && <Card username={username} password={password} />}
    </div>
  )
}

export default App
