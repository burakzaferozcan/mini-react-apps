import { useState, useEffect } from "react";
import axios from "axios";
import SingleUser from "./SingleUser";
function UserList() {
  const [users, setUsers] = useState([]);
  const [userNumber, setUserNumber] = useState(6);
  const fetchUser = async () => {
    const response = await axios.get(
      `https://randomuser.me/api/?results=${userNumber}`
    );
    console.log(response.data);
    setUsers(response.data.results);
  };
  useEffect(() => {
    fetchUser();
  }, [userNumber]);

  return (
    <div className="w-full flex items-center  justify-center flex-col gap-5 m-5">
      <input
        type="number"
        className="bg-slate-800 text-white p-3 text-center rounded-xl"
        placeholder="Kullanıcı Sayısı Giriniz"
        onChange={(e) => setUserNumber(e.target.value)}
      />
      <div className="flex flex-wrap gap-5 justify-center items-center">
        {users.map((user, i) => (
          <SingleUser key={i} user={user} />
        ))}
      </div>
    </div>
  );
}

export default UserList;
