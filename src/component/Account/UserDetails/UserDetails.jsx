import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux';
import './UserDetails.css'
import { toast } from 'react-hot-toast';
import Loading from './../../loaders/SpinnerLoading/SpinnerLoading.jsx';
export default function UserDetails() {
    const [data, setData] = useState('')
    const { userToken, userId } = useSelector((state) => state.userLoginData)
    console.log(userToken, userId);
    let headers = { authorization: "Bearer " + userToken };
    const getUserData = async () => {
        try {
            const { data } = await axios.post(`https://online-doctor-app.onrender.com/user/userDetails/${userId}`,
                {}, { headers })
            console.log(data);
            if (data.success === true) setData(data.result);
            if (data.success === false) toast.error(data.message.split(" ").slice(0, 2).join(" "));
        } catch (error) {
            console.log(error.message);
            toast.error(error.message.split(" ").slice(0, 2).join(" "));
        }
    }

    useEffect(() => {
        if (userToken && userId) getUserData();

        // eslint-disable-next-line
    }, [userToken, userId])
    return (
        <>
            {!data ? <Loading /> : <>
                <div className="UserDetails d-flex bgColorLite" >
                    <div className="container-fluid ">
                        <div className="UserDetailsForm bg-white">
                            <div className="TopText topTextBgColor py-2">
                                <p className='text-center p-0 m-0 text-white'>Manage Profile</p>
                            </div>

                            <div className="px-3 my-3">
                                {/* {isMessage.length > 0 ? <p className="alert alert-danger" role="alert">{isMessage}</p> : ''}
                            {isError.length > 0 ? <p className="alert alert-danger" role="alert">{isError}</p> : ''} */}
                                <div className="form-floating mb-3">
                                    <input type="text" name='name' className="form-control ps-2" id="floatingInputName" placeholder="UserName" autoComplete='userName' value={data?.name} onChange={() => data?.name} />
                                    <label htmlFor="floatingInputName" className='ps-2'>UserName<span className="text-danger">*</span></label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="email" name="email" className="form-control ps-2" id="floatingInputEmail" placeholder="name@example.com" value={data.email} onChange={() => data.email} />
                                    <label htmlFor="floatingInputEmail  " className='ps-2'>Email address<span className="text-danger">*</span></label>

                                </div>
                                <div className="form-floating mb-3">
                                    <input type="date" name="date" className="form-control" id="floatingInputDate" placeholder="01-01-2024" value={data.date} onChange={() => data.date} />
                                    <label htmlFor="floatingInputDate" className='ps-2'>Date Of Birth<span className="text-danger">*</span></label>

                                </div>
                                <div className="w-100 mb-3">
                                    <div className="row justify-content-center">
                                        <div className="col-md-6 form-floating">
                                            <input type="number" name="hight" maxLength={3} className="form-control " id="floatingInputHight" placeholder="20" value={data.hight} onChange={() => data.hight} />
                                            <label htmlFor="floatingInputHight" className='ms-2'>Your Hight<span className="text-danger">*</span></label>

                                        </div>
                                        <div className="col-md-6 form-floating">
                                            <input type="number" name="weight" maxLength={3} className="form-control " id="floatingInputWeight" placeholder="20" value={data.weight} onChange={() => data.weight} />
                                            <label htmlFor="floatingInputWeight" className='ms-2'>Your Weight<span className="text-danger">*</span></label>

                                        </div>
                                    </div>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="phone" name="phone" className="form-control" id="floatingInputPhone" placeholder="012345678" value={data.phone} onChange={() => data.phone} />
                                    <label htmlFor="floatingInputPhone">Mobile Number<span className="text-danger">*</span></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>}
        </>
    )
}
