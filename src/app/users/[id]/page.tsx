"use client"
export default function Detail({ params }: { params: { id: string } }) {
    let idUser = params.id
    return (
            
        <h1 style={{marginTop:"300"}}>This is Detail {idUser}</h1>
             
    )
}