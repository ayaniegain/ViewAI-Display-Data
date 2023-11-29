import React from "react";
import { useDataApi } from "./useDataApi";

function DataTable() {
  let randomUserDetails = useDataApi();

  if (!randomUserDetails) return null;

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-10">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              City
            </th>
            <th scope="col" className="px-6 py-3">
              State
            </th>
            <th scope="col" className="px-6 py-3">
              Country
            </th>
            <th scope="col" className="px-6 py-3">
              Passcode
            </th>
            <th scope="col" className="px-6 py-3">
              Number
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Latitude
            </th>
            <th scope="col" className="px-6 py-3">
              Longitude
            </th>
          </tr>
        </thead>
        <tbody>
          {randomUserDetails.map((e, ind) => (
            <tr
              key={ind}
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
            >
              <td className="px-6 py-4">{e.location.city}</td>
              <td className="px-6 py-4">{e.location.state}</td>
              <td className="px-6 py-4">{e.location.country}</td>
              <td className="px-6 py-4">{e.location.postcode}</td>
              <td className="px-6 py-4">{e.location.street.number}</td>
              <td className="px-6 py-4">{e.location.street.name}</td>
              <td className="px-6 py-4">{e.location.coordinates.latitude}</td>
              <td className="px-6 py-4">{e.location.coordinates.longitude}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;

// <td className="px-6 py-4">
// {   randomUserDetails.map((e)=><h2>{e.location.city}</h2>)}
// {/* {city} */}

// </td>
// <td className="px-6 py-4">
// {   randomUserDetails.map((e)=><h2>{e.location.state}</h2>)}

// </td>
// <td className="px-6 py-4">
// {   randomUserDetails.map((e)=><h2>{e.location.country}</h2>)}

// </td>
// <td className="px-6 py-4">
// {   randomUserDetails.map((e)=><h2>{e.location.postcode}</h2>)}

// </td>
// <td className="px-6 py-4">
// {   randomUserDetails.map((e)=><h2>{e.location.postcode}</h2>)}

// </td>
// <td className="px-6 py-4">
// {   randomUserDetails.map((e)=><h2>{e.location.street.name}</h2>)}

// </td>
// <td className="px-6 py-4">
// {   randomUserDetails.map((e)=><h2>{e.location.coordinates.latitude}</h2>)}

// </td>
// <td className="px-6 py-4">
// {   randomUserDetails.map((e)=><h2>{e.location.coordinates.longitude}</h2>)}

// </td>
