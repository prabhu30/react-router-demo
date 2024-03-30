import { useState } from "react"
import { Link } from "react-router-dom"

function GitPeek() {
  const [ inputUsername, setInputUsername ] = useState("/gitpeek/prabhu30")

  return (
    <div className="mx-auto max-w-screen-lg flex flex-col items-center my-10">
      <h1 className="text-3xl font-bold">Search Github</h1>
      <div>
        <input 
        type="text" 
        placeholder="Github Username" 
        className="border border-orange-600 rounded-lg p-2 px-4 my-6 mr-6 outline-none" 
        onChange={(event) => setInputUsername(`/gitpeek/${event?.target.value}`)} />
        <Link to={inputUsername} className="p-2 px-4 border border-orange-600 bg-orange-600 rounded-lg text-white">
          Search
        </Link>
      </div>
    </div>
  )
}

export default GitPeek