// import React, { useEffect, useState } from 'react';

import userData from "../usersData";

// const UserProfile = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Retrieve the user data from localStorage
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   if (!user) {
//     return <p>No user logged in.</p>;
//   }

//   return (
//     <div>
//       <h1>User Profile</h1>
//       <p>Username: {user.username}</p>
//       <p>Email: {user.email}</p>
//     </div>
//   );
// };

// export default UserProfile;

function About() {
    //displays
        return (
        <body>
            <h3 className="heading"> {userData.name} </h3>
            <h3>You've eaten a grand total of {userData[0].totalSushiOrdered} sushi rolls!</h3>
        </body>
        );
    }
export default About