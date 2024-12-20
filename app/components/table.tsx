import React from "react";
import { GrAnnounce } from "react-icons/gr";

const table = () => {
  return (
    <div className="overflow-x-scroll p-2 pn:max-sm:overflow-y-scroll">
      <div className="bg-gray-50 border-[1px] p-2 rounded-2xl">
        <div className="flex justify-between items-center p-2">
          <div className="flex items-center justify-center gap-2">
            {" "}
            <div className="font-semibold flex items-center gap-2">
              <GrAnnounce />
              Campaign Queries
            </div>
          </div>
          <div className="p-1 px-4 bg-blue-400 rounded-xl text-[#fff] pn:max-sm:text-[12px]">
            Create Ad
          </div>
        </div>
        {/* Table */}
        <div className="w-full border border-gray-300">
          <table className="min-w-full bg-white pt-2 text-black border rounded-2xl border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2 font-Jost font-semibold text-sm">
                  On/Off
                </th>
                <th className="border border-gray-300 p-2 font-Jost font-semibold text-sm max-w-xs">
                  Name
                </th>
                <th className="border border-gray-300 p-2 font-Jost font-semibold text-sm">
                  Status
                </th>
                <th className="border border-gray-300 p-2 font-Jost font-semibold text-sm">
                  Impressions
                </th>
                <th className="border border-gray-300 p-2 font-Jost font-semibold text-sm">
                  Clicks
                </th>
                <th className="border border-gray-300 p-2 font-Jost font-semibold text-sm">
                  CPC
                </th>
                <th className="border border-gray-300 p-2 font-Jost font-semibold text-sm">
                  CTR
                </th>
                <th className="border border-gray-300 p-2 font-Jost font-semibold text-sm">
                  Amount Spent
                </th>
              </tr>
            </thead>
            <tbody>
              {/* {loading
          ? Array.from({ length: 5 }).map((_, index) => ( */}
              <tr
                // key={`skeleton-${index}`}
                className="hover:bg-gray-100 transition duration-200"
              >
                <td className="border border-gray-300 text-center p-1">
                  <div className="w-10 mx-auto">
                    {/* <Skeleton width={24} height={24} /> */}
                  </div>
                </td>
                <td className="border border-gray-300 p-2 py-4">
                  <div className="flex items-center justify-center">
                    {/* <Skeleton width={120} /> */}
                  </div>
                </td>
                <td className="border border-gray-300 p-2 py-4">
                  <div className="flex items-center justify-center">
                    {/* <Skeleton width={80} /> */}
                  </div>
                </td>
                <td className="border border-gray-300 p-2 py-4">
                  <div className="flex items-center justify-center">
                    {/* <Skeleton width={60} /> */}
                  </div>
                </td>
                <td className="border border-gray-300 p-2 py-4">
                  <div className="flex items-center justify-center">
                    {/* <Skeleton width={40} /> */}
                  </div>
                </td>
                <td className="border border-gray-300 p-2 py-4">
                  <div className="flex items-center justify-center">
                    {/* <Skeleton width={60} /> */}
                  </div>
                </td>
                <td className="border border-gray-300 p-2 py-4">
                  <div className="flex items-center justify-center">
                    {/* <Skeleton width={40} /> */}
                  </div>
                </td>
                <td className="border border-gray-300 p-2 py-4">
                  <div className="flex items-center justify-center">
                    {/* <Skeleton width={80} /> */}
                  </div>
                </td>
              </tr>
              {/* )) */}
              {/* : ads.map((campaign) => ( */}
              <tr
                // key={campaign.id}
                className="hover:bg-gray-100 transition duration-200"
              >
                <td className="border border-gray-300 text-center p-1">
                  <label className="inline-flex items-center cursor-pointer">
                    {/* <Switch
                      checked={campaign.on}
                      onClick={() =>
                        handleToggle(
                          campaign.id,
                          campaign.on,
                          campaign.status
                        )
                      }
                      className="bg-gray-300"
                    /> */}
                  </label>
                </td>
                <td className="border border-gray-300 text-sm text-stone-500 font-Jost font-normal text-center p-2 py-4">
                  <div className="flex items-center justify-center gap-2">
                    {/* {campaign.name} */}Name
                  </div>
                </td>
                <td className="border border-gray-300 text-sm text-stone-500 font-Jost font-normal text-center p-2 py-4">
                  <div className="flex items-center justify-center gap-2">
                    {/* {campaign.status} */} status
                  </div>
                </td>
                <td className="border border-gray-300 text-sm text-stone-500 font-Jost font-normal text-center p-2 py-4">
                  {/* {campaign.impressions} */}1333
                </td>
                <td className="border border-gray-300 text-sm text-stone-500 font-Jost font-normal text-center p-2 py-4">
                  {/* {campaign.clicks} */}13
                </td>
                <td className="border border-gray-300 text-sm text-stone-500 font-Jost font-normal text-center p-2 py-4">
                  {/* {campaign.cpc} */}12
                </td>
                <td className="border border-gray-300 text-sm text-stone-500 font-Jost font-normal text-center p-2 py-4">
                  {/* {campaign.ctr}% */}13
                </td>
                <td className="border border-gray-300 text-sm text-stone-500 font-Jost font-normal text-center p-2 py-4">
                  {/* {campaign.amountSpent} */} 1200
                </td>
              </tr>
              {/* ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default table;
