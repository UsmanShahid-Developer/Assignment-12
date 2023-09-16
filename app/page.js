"use client"
// import Image from "next/image";
import { useState } from "react"
export default function Home() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [userName, setUserName] = useState('');
  const [userName2, setUserName2] = useState('');


  const handleChange = (e) => {
    setUserName(e.target.value)
  };


  const handleGet = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`)
      if (!response.ok) {
        alert("User not found or other error occurred.")
        setUserName('');
        return
      }
      setUserName('');
      const userData = await response.json();
      setData([...data, userData]);
      console.log(userData.following)
      setUserName('')


    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  const handleGet2 = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`)
      if (!response.ok) {
        alert("User not found or other error occurred.")
        setUserName2('');
        return
      }
      setUserName2('');
      const userData2 = await response.json();
      setData2([userData2]);
      console.log(userData2.following)
      setUserName2('')


    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  return (
    <>


      <div className="    bg-green-100	py-5	 pt-10 pb-72 min-w-full ">
        <div className="    ">
          <div className="text-[#000] text-7xl text-center">Use Github API</div>


          {data2.map((userData, i) => (
            <div key={i} className="text-base		  border-[#000]">
              <div className="grid justify-items-center">
                <div className="px-6 py-3   text-center font-medium text-[#000]  rounded-full"> <img src={userData.avatar_url} alt="asd" width={250} className="rounded-full text-center" height={250} /></div>
              </div>
              <div className=" flex justify-around">
                <div className="px-6 py-3 text-left text-2xl font-small text-[#000] uppercase tracking-wider"> Name : {userData.name}</div>
              </div>

            </div>
          ))}






          <div className="text-center py-10">
            <input
              className="border border-red-400 rounded-lg px-20 py-5 "
              type="text"
              placeholder="Enter your user name"
              value={userName}
              onChange={handleChange}
            />
          <span className="text-center" onClick={handleGet2}><button onClick={handleGet} className="bg-[#991b1b] hover:bg-[#991b1b] text-white font-bold py-5 px-6 rounded-lg ms-5">
            Get Data
          </button>
          </span>
          </div>


          <div className="overflow-x-auto  pt-10">
            <table className="min-w-full">
              <thead>
                <tr className="border-b  font-medium  border-[#000]">
                  <th className="px-6 py-3  text-left 	 font-medium text-[#000] uppercase text-3xl tracking-wider">#</th>
                  <th className="px-6 py-3 text-left text-3xl font-medium text-[#000] uppercase tracking-wider">Profile</th>
                  <th className="px-6 py-3 text-left text-3xl font-medium text-[#000] uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-3xl font-medium text-[#000] uppercase tracking-wider">Followers</th>
                  <th className="px-6 py-3 text-left text-3xl font-medium text-[#000] uppercase tracking-wider">Following</th>
                  

                </tr>
              </thead>


              <tbody>
                {data.map((userData, i) => (
                  <tr key={i} className="border-4 border-red-500/75  font-medium">
                    <th className="px-6 py-3 text-left text-1xl font-medium text-[#000] uppercase tracking-wider">{i + 1}</th>
                    <th className="px-6 py-3 text-left text-1xl border-4 border-red-500/75 font-medium text-[#000] uppercase tracking-wider rounded-full"> <img src={userData.avatar_url} alt="asd" width={75} className="rounded-full" height={75} /></th>
                    <th className="px-6 py-3 text-left text-1xl border-4 border-red-500/75 font-medium text-[#000] uppercase tracking-wider">{userData.login}</th>
                    <th className="px-6 py-3 text-center text-1xl font-medium text-[#000] uppercase border-4 border-red-500/75 tracking-wider">{userData.followers}</th>
                    <th className="px-6 py-3 text-left text-1xl font-medium text-[#000] uppercase border-4 border-red-500/75 tracking-wider">{userData.following}</th>
            

                  </tr>
                ))}


               
              </tbody>

            </table>
          </div>
        </div>
        <h1 className="mt-10 py-10 px-20 text-2xl text-center">@Made By-Usman-Shahid</h1>
        <br/>
        <br/>
        <br/>
      </div>

    </>
  )
}