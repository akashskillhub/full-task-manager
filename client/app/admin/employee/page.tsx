"use client"
import { useGetEmployeesQuery } from '@/redux/apis/admin.api'
import clsx from 'clsx'

const AdminEmployee = () => {
    const { data } = useGetEmployeesQuery()

    const handleBgColor = (active: boolean, isDelete: boolean) => clsx({
        "table-success": active && !isDelete,
        "table-secondary": !active && !isDelete,
        "table-danger": isDelete,
    })
    return <>
        <div className="container">
            <h1>Employee Register Form goese here</h1>

            {
                data && <table className='table table-bordered table-hover'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>email</th>
                            <th>mobile</th>
                            <th>role</th>
                            <th>active</th>
                            <th>isDelete</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* active true => green */}
                        {/* active false => gray */}
                        {/* isDelete true => red */}
                        {
                            data.result.map(item => <tr className={handleBgColor(item.active, item.isDelete)} >
                                <td>{item._id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.mobile}</td>
                                <td>{item.role}</td>
                                <td>{item.active ? "Yes" : "No"}</td>
                                <td>{item.isDelete ? "Yes" : "No"}</td>
                                <td>
                                    {
                                        item.isDelete
                                            ? <button className='btn  btn-warning btn-sm'>Restore</button>
                                            : <div>
                                                <button className='btn btn-sm btn-outline-warning'>
                                                    <i className="bi bi-pencil"></i>
                                                </button>
                                                <button className='btn btn-sm btn-outline-danger ms-2'>
                                                    <i className="bi bi-trash"></i>
                                                </button>
                                            </div>
                                    }

                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>
            }
        </div>
    </>
}

export default AdminEmployee