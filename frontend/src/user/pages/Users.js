import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [
        {
            id: 1,
            name: 'Leonardo Campelo', 
            image: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80', 
            places: 3
        }
    ];

    return <UsersList items={USERS} />

};

export default Users;