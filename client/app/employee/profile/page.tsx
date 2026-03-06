"use client"
import { useGetProfileQuery } from '@/redux/apis/employee.api'

const EmployeeProfile = () => {
    const { data } = useGetProfileQuery()
    return <>
        {
            data && <div className="container my-5">
                <div className="card">
                    <div className="card-header">My Profile</div>
                    <div className="card-body">
                        <div>Name : {data.result.name}</div>
                        <div>Email : {data.result.email}</div>
                        <div>Mobile : {data.result.mobile}</div>
                        <div>Profile : {data.result.profilePic}</div>
                        <div>Account : {data.result.active ? "Active" : "InActive"}</div>
                    </div>
                </div>
            </div>
        }
    </>
}

export default EmployeeProfile