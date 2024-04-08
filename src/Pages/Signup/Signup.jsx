import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import UseAuth from "../../hooks/UseAuth";

const Signup = () => {
  const { createUser } = UseAuth()
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const { UserName,Email, password, photoURL, confirmPassword } = data;
    if (password !== confirmPassword) {
     
      return;
    }
    createUser(Email, password)
    .then(result=>console.log(result))
    .catch(err=>console.log(err))
  };
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)} action="" className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-gray-600">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              {...register("UserName", { required: true }) } 
              
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-indigo-600"
            />
              {errors.UserName && <span className="text-red-600">This field is required</span>}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              {...register("Email", { required: true }) } 
              
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-indigo-600"
            />
              {errors.Email && <span className="text-red-600">This field is required</span>}
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
             { ...register("photoURL")}

              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-indigo-600"
            />
           
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
                {...register("password", { required: true })}
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-indigo-600"
            />
            {errors.password && <span className="text-red-600">Password is required</span>}
          </div>


          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-600">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="repeat your Password"
                {...register("confirmPassword", { required: true })}
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-indigo-600"
            />
            {errors.confirmPassword && <span className="text-red-600">Password confirmation is required</span>}
          </div>

          <button
            type="submit"
            className="block w-full p-3 text-center rounded-lg text-white bg-[#d19945]"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
