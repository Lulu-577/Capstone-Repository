

export default async function UserProfile({params}: any) {
    const {id} = await params;
    return(
        <div className="user_profile_div">
            <h1>Profile</h1>
            <hr/>
            <p > Profile Page:  
                <span>{id}</span></p>
        </div>
    )
}