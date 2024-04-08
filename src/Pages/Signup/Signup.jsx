import React from 'react';

const Signup = () => {
    return (
        <div className='flex justify-center items-center mt-10'>
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800">
<h1 className="text-2xl font-bold text-center">Sign Up</h1>
<form  action="" className="space-y-6">
    <div className="space-y-1 text-sm">
        <label htmlFor="username" className="block text-gray-600">Username</label>
        <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-indigo-600" />
    </div>
    <div className="space-y-1 text-sm">
        <label htmlFor="photo" className="block text-gray-600">Photo URL</label>
        <input type="url" name="photoURL" id="photoURL" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-indigo-600" />
        
    </div>
    <div className="space-y-1 text-sm">
        <label htmlFor="password" className="block text-gray-600">Password</label>
        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-indigo-600" />
        
    </div>
    <div className="space-y-1 text-sm">
        <label htmlFor="password" className="block text-gray-600">Confirm Password</label>
        <input type="password" name="confirm-password" id="confirm-password" placeholder="repeat your Password" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-indigo-600" />
        
    </div>
   
    <button className="block w-full p-3 text-center rounded-lg text-white bg-[#d19945]">Sign Up</button>
</form>


</div>
    </div>
    );
};

export default Signup;