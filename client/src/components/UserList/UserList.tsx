import { useQuery } from "@apollo/client";
import React from "react";
import { Query } from "../../generated/graphql";
import { GET_USERS_WITH_COMPANY } from "../../queries";

const UserList: React.FC = () => {
  const { loading, data } = useQuery<Query>(GET_USERS_WITH_COMPANY);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <ul>
      {data!.user!.map((user) => {
        return (
          <li key={user?.id}>
            {user?.name} - {user?.company?.name}
          </li>
        );
      })}
    </ul>
  );
};

export default UserList;
