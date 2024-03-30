import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function GithubProfile() {
    const { username } = useParams();

    const githubDataObj: any = {}
    const [ githubProfileData, setGithubProfileData ] = useState(githubDataObj);

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(data => setGithubProfileData(data))
    }, [])

    return (
        <div className="max-w-screen-lg mx-auto flex flex-col items-center my-16">
            <h1 className="text-3xl font-bold mb-8">{githubProfileData.name}</h1>
            <div className="flex justify-center">
                <div>
                    <img src={githubProfileData.avatar_url} className="h-40 w-40 rounded-full mr-12"/>
                </div>
                <div className="pt-4 flex flex-col gap-3">
                    <p>
                        <span className="font-bold text-blue-800 py-8">Name : </span> 
                        {githubProfileData.name}
                    </p>
                    <p>
                        <span className="font-bold text-blue-800 py-8">Followers : </span> 
                        {githubProfileData.followers}
                    </p>
                    <p>
                        <span className="font-bold text-blue-800">Repositories : </span> 
                        {githubProfileData.public_repos}
                    </p>
                    <p>
                        <span className="font-bold text-blue-800">Profile : </span> 
                        <a href={`https://github.com/${githubProfileData.login}`} className="underline">
                            {githubProfileData.login}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default GithubProfile