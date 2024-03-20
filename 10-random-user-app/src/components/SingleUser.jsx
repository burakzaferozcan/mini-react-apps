import React from "react";

function SingleUser({ user }) {
  // Eğer user nesnesi yoksa null veya başka bir değer döndür
  if (!user) {
    return null;
  }

  return (
    <ul>
      <li className="w-96 flex gap-3 items-center p-5 rounded-xl bg-slate-800 text-white text-xs">
        <div>
          <img
            src={user.picture.large}
            alt={`${user.name.first}_photo`}
            className="rounded-xl w-20"
          />
        </div>
        <div>
          <h2>
            Name : {user.name.first} {user.name.last}
          </h2>
          <p>Gender : {user.gender}</p>
          <p>E-mail: {user.email}</p>
        </div>
      </li>
    </ul>
  );
}

export default SingleUser;
