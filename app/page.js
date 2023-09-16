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


      <div className="bg-[#D6EFFF] pt-10 pb-72 min-w-full ">
        <div className="    ">
          <div className="text-[#000] text-7xl text-center">Use Github API</div>


          {data2.map((userData, i) => (
            <div key={i} className="text-3xl	  border-[#000]">
              <div className="grid justify-items-center">
                <div className="px-6 py-3   text-center font-medium text-[#000]  rounded-full"> <img src={userData.avatar_url} alt="asd" width={250} className="rounded-full text-center" height={250} /></div>
              </div>
              <div className=" flex justify-around">
                <div className="px-6 py-3 text-left text-l font-medium text-[#000] uppercase tracking-wider"> Name : {userData.name}</div>
                <div className="px-6 py-3 text-left text-l font-medium text-[#000] uppercase tracking-wider"> Followers :{userData.followers}</div>
                <div className="px-6 py-3 text-left text-l font-medium text-[#000] uppercase tracking-wider"> Following :{userData.following}</div>
                <div className="px-6 py-3 text-left text-l font-medium text-[#000] uppercase tracking-wider"> Public repos : {userData.public_repos}</div>
              </div>

            </div>
          ))}






          <div className="text-center py-10">
            <input
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Enter your user name"
              value={userName}
              onChange={handleChange}
            />
          </div>
          <div className="text-center" onClick={handleGet2}><button onClick={handleGet} className="bg-[#991b1b] hover:bg-[#991b1b] text-white font-bold py-2 px-4 rounded">
            Get Data
          </button>
          </div>


          <div className="overflow-x-auto  pt-10">
            <table className="min-w-full">
              <thead>
                <tr className="border-b  font-medium  border-[#000]">
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#000] uppercase tracking-wider">#</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#000] uppercase tracking-wider">Profile</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#000] uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#000] uppercase tracking-wider">Followers</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#000] uppercase tracking-wider">Following</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#000] uppercase tracking-wider">Public repos</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#000] uppercase tracking-wider">Github</th>

                </tr>
              </thead>


              <tbody>
                {data.map((userData, i) => (
                  <tr key={i} className="border-b  font-medium  border-[#000]">
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#000] uppercase tracking-wider">{i + 1}</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#000] uppercase tracking-wider rounded-full"> <img src={userData.avatar_url} alt="asd" width={75} className="rounded-full" height={75} /></th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#000] uppercase tracking-wider">{userData.login}</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#000] uppercase tracking-wider">{userData.followers}</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#000] uppercase tracking-wider">{userData.following}</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#000] uppercase tracking-wider">{userData.public_repos}</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#000] uppercase tracking-wider">{userData.url}</th>

                  </tr>
                ))}


                {/* {data.map((item, i) => (
7
                  <tr key={i} className="border-b  font-medium  border-[#33B1FF]">
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider">{i + 1}</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider rounded-full"> <Image src={item.avatar_url} alt={adsf} width={75} height={75} /></th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider">{item.login}</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider">{item.followers}</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider">{item.following}</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider">{item.public_repos}</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider">{item.url}</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider">Action</th>
                  </tr>

                ))} */}
              </tbody>

            </table>


            {/* <div className="flex  p-10">
              <div className="px-10">
                <img src={data.avatar_url} width={70} height={70} className='rounded-full' />
              </div>
              <div className="px-20"> {data.name}</div>
              <div className="px-18">{data.followers}</div>
              <div className="px-32">{data.following}</div>
              <div className="px-32"> {data.public_repos}</div>
              <div className="px-">{data.html_url}</div>
            </div> */}
          </div>
        </div>
      </div>

    </>
  )
}