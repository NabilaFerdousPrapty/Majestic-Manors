import UseAuth from "../../hooks/UseAuth";
import img from '../../assets/user.png'
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from 'react-hot-toast';

const UpdateProfile = () => {
    const [hide, setHidden] = useState(true); 
    const { user,updateUserProfile } = UseAuth();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) =>{ 
        console.log(data);
        const { UserName, photoURL } = data;
        updateUserProfile(UserName, photoURL);
        toast.success("Profile updated successfully");
    }

    const toggleFormVisibility = () => {
        setHidden(!hide); 
    }

    return (
        <div className="flex flex-col justify-center items-center w-full bg-gray-100">
            <div className="flex flex-col max-w-lg p-6 bg-gray-50 text-gray-800 text-center">
                <img
                    src={user?.photoURL || img}
                    alt=""
                    className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 bg-gray-500 aspect-square"
                />
                <div>
                    <h2 className="text-xl font-semibold">{user?.displayName || 'You have not added any UserName'}</h2>

                    <p>
                        {
                            user?.email || 'You have not added any email'
                        }
                    </p>
                    <div onClick={toggleFormVisibility} className="btn bg-[#d19945] px-2 py-1 rounded-md text-white">Update Profile</div>
                </div>
            </div>
            {!hide && (
                <div className={`mt-10`}>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="space-y-12">
                        <div className="space-y-4">
                            <div className="space-y-1 text-sm">
                                <label htmlFor="username" className="block text-gray-600">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    placeholder="Username"
                                    {...register("UserName", { required: true })}
                                    className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-indigo-600"
                                />
                                {errors.UserName && <span className="text-red-600">This field is required</span>}
                            </div>
                            <div className="space-y-1 text-sm">
                                <label htmlFor="photo" className="block text-gray-600">
                                    Photo URL
                                </label>
                                <input
                                    type="url"
                                    name="photoURL"
                                    id="photoURL"
                                    placeholder="Photo URL"
                                    {...register("photoURL")}
                                    className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-indigo-600"
                                />

                            </div>

                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-center items-center">
                                <button type="submit" className="btn bg-[#d19945] px-2 py-1 rounded-md text-white text-center">Submit</button>
                            </div>

                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default UpdateProfile;
