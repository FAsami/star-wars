import { useQuery } from "@apollo/client";
import React from "react";
import { getPersonsQuery } from "../../Queries/personQueries";
import Loading from "../Common/Loading";
import Person from "./Person";

function PersonsList() {
  const { loading, error, data } = useQuery(getPersonsQuery);
  if (loading) return <Loading />;
  if (error) return <p>Error</p>;
  if (!loading && !error) {
    if (data.persons.length !== 0) {
      return (
        <div>
          <p className="text-center">
            Displaying {data.persons.length} persons
          </p>
          {data.persons.map((person) => (
            <Person key={person.id} person={person} />
          ))}
        </div>
      );
    }

    return <p>No result found</p>;
  }
}

export default PersonsList;
