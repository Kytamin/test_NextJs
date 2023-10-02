"use client"
import { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { useRouter } from 'next/navigation'
import { Modal } from "@mui/material"
async function User() {
    const [userInfo, setUserInfo] = useState([])
    const router =useRouter()

    useEffect(() => {
        const getdata = async () => {
            const query = await fetch('https://api.github.com/users')
            const response = await query.json()
            setUserInfo(response)
        }
        getdata()
    }, []);
    return (
        <div>
            <table className="table">
                <thead>
                    <tr >
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">avatar</th>
                    </tr>
                </thead>
                <tbody>
                    {userInfo.map((element: any, index: any) => (
                        <tr key={index}>
                            <td>{element.login}</td>
                            <td>{element.type}</td>
                            <td className="col-1" ><input type="image" src={element.avatar_url} width={"100px"} className="img-fluid" /></td>
                            <td className="col-1" ><input type="button" value="Delete" /></td>
                            <td className="col-1" ><input type="button" value="Update" /></td>
                            <td className="col-1" ><input type="button" value="Detail"onClick={() => router.push('/users/'+ element.id)} /></td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default User