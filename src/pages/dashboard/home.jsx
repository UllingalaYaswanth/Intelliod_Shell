import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Avatar,
} from "@material-tailwind/react";
import {
  ArrowUpIcon,
  FlagIcon,
} from "@heroicons/react/24/outline";
import { StatisticsCard } from "@/widgets/cards";
import { StatisticsChart } from "@/widgets/charts";
import {
  statisticsChartsData,
  ordersOverviewData,
} from "@/data";
import { ClockIcon } from "@heroicons/react/24/solid";
import AsdImage from "./img/thor.jpeg";
import ProjectStastics from "@/data/ProjectStastics";
import ProjectStastics_service from "@/data/ProjectStastics_service";
import ProjectStastics_cost from "@/data/ProjectStastics_cost";
import Project_cost from "@/data/Project_cost"

// Sample data for comments
const recentCommentsData = [
  { id: 1, name: "John Doe", profilePic: AsdImage, comment: "Great job on the recent project! The new update is fantastic. Looking forward to the next release.", timestamp: "2 hours ago" },
  { id: 2, name: "Jane Smith", profilePic:AsdImage, comment: "The new update is fantastic. Looking forward to the next release.", timestamp: "1 day ago" },
  { id: 3, name: "Alice Johnson", profilePic: AsdImage, comment: "Looking forward to the next release.", timestamp: "3 days ago" },
];

export function Home() {
  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        <StatisticsCard
          title={<h1 style={{ fontSize: '1.5rem' }}>Vehicles</h1>}
          icon={<FlagIcon className="w-6 h-6 text-white" />}
          color="#FD6F52"
          footer={
            <div className="flex justify-between">
              <div className="flex flex-col space-y-2">
                <div className="text-sm"><span>Out of Service:</span> <span className="text-red-500">10</span></div>
                <div className="text-sm"><span>Active:</span> <span className="text-blue-500">50</span></div>
              </div>
              <div className="flex flex-col space-y-2 text-right">
                <div className="text-sm"><span>Available:</span> <span className="text-green-500">25</span></div>
              </div>
            </div>
          }
        />
        <StatisticsCard
          title={<h1 style={{ fontSize: '1.5rem' }}>Drivers</h1>}
          icon={<FlagIcon className="w-6 h-6 text-white" />}
          color="#FD6F52"
          footer={
            <div className="flex justify-between">
              <div className="flex flex-col space-y-2">
                <div className="text-sm"><span>Off-duty:</span> <span className="text-red-500">15</span></div>
                <div className="text-sm"><span>In Service:</span> <span className="text-blue-500">20</span></div>
              </div>
              <div className="flex flex-col space-y-2 text-right">
                <div className="text-sm"><span>Active:</span> <span className="text-green-500">30</span></div>
              </div>
            </div>
          }
        />
        <StatisticsCard
          title={<h1 style={{ fontSize: '1.5rem' }}>Service Reminders</h1>}
          icon={<FlagIcon className="w-6 h-6 text-white" />}
          color="#FD6F52"
          footer={
            <div className="flex flex-col space-y-2">
              <div className="text-sm"><span>Vehicles Overdue:</span> <span className="text-red-500">5</span></div>
              <div className="text-sm"><span>Vehicle Due Soon:</span> <span className="text-blue-500">10</span></div>
            </div>
          }
        />
        <StatisticsCard
          title={<h1 style={{ fontSize: '1.5rem' }}>Total Emissions</h1>}
          icon={<FlagIcon className="w-6 h-6 text-white" />}
          color="#FD6F52"
          footer={
            <div className="flex flex-col space-y-2">
              <div className="text-sm"><span>CO2 Emissions:</span> <span className="text-red-500">1000kg</span></div>
              <div className="text-sm"><span>NOx Emissions:</span> <span className="text-blue-500">200kg</span></div>
            </div>
          }
        />
      </div>
      {/* <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        {statisticsChartsData.map((props) => (
          <StatisticsChart
            key={props.title}
            {...props}
            footer={
              <Typography
                variant="small"
                className="flex items-center font-normal text-blue-gray-600"
              >
                <ClockIcon strokeWidth={2} className="h-4 w-4 text-blue-gray-400" />
                &nbsp;{props.footer}
              </Typography>
            }
          />
        ))}
      </div> */}
      <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-col-2 xl:grid-cols-3">
        <ProjectStastics_cost/>
        <ProjectStastics_service/>
        <Project_cost/>
      </div>

      <Card className="mt-3 p-3 mb-5">
          <Typography variant="h6" color="blue-gray" className="mb-3">
            Recent Work Orders
          </Typography>
          <div className='flex flex-row gap-3 mb-4'>
            <input 
              type='text'
              placeholder='Enter work ID'
              className='border-none ring-gray-300 ring-2 rounded-2xl px-3 py-1 pr-5 pl-5 focus:ring-gray-500'
            />
          </div>
          <div className='mt-4'>
            <table className='w-full text-sm  overflow-scroll' >
              <thead className='border-y text-left'>
                <tr className='px-3 py-5'>
                  <th className='px-1 py-4'>Work Order Id</th>
                  <th className='px-2 py-4'>Vehicle Name</th>
                  <th className='px-2 py-4'>Type</th>
                  <th className='px-2 py-4'>Size</th>
                  <th className='px-2 py-4'>From Location</th>
                  <th className='px-2 py-4'>To Location</th>
                  <th className='px-2 py-4'>Delivery Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b'>
                  <td className='px-2 py-4'>WO12345</td> 
                  <td className='px-6 py-4'>Truck A</td> 
                  <td className='px-2 py-4'>Wood</td>
                  <td className='px-2 py-4'>5T</td>
                  <td className='px-2 py-4'>Bangalore</td>
                  <td className='px-2 py-4'>Vizag</td>
                  <td className='px-2 py-4'><span className="badge badge-secondary">05/06/2024</span></td>
                </tr>
                <tr className='border-b'>
                  <td className='px-2 py-4'>WO12346</td> 
                  <td className='px-6 py-4'>Truck B</td>
                  <td className='px-2 py-4'>Sand</td>
                  <td className='px-2 py-4'>5T</td>
                  <td className='px-2 py-4'>Vizag</td>
                  <td className='px-2 py-4'>Bangalore</td>
                  <td className='px-2 py-4'><span className="badge badge-secondary">20/06/2024</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      
      <div className="mb-4 grid grid-cols-1 gap-6">
      <Card className="border border-blue-gray-100 shadow-sm w-full">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 p-6"
          >
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Recent Comments
            </Typography>
            {/* <Typography
              variant="small"
              className="flex items-center gap-1 font-normal text-blue-gray-600"
            >
              <ArrowUpIcon
                strokeWidth={3}
                className="h-3.5 w-3.5 text-green-500"
              />
              <strong>24%</strong> this month
            </Typography> */}
          </CardHeader>
          <CardBody className="pt-0">
            {recentCommentsData.map(({ id, name, profilePic, comment, timestamp }) => (
              <div key={id} className="flex items-start gap-4 py-3">
                <Avatar src={profilePic} alt={name} className="w-12 h-12" />
                <div className="flex flex-col">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="block font-medium"
                  >
                    {name}
                  </Typography>
                  <Typography
                    variant="small"
                    className="text-xs font-medium text-blue-gray-500"
                  >
                    {comment}
                  </Typography>
                  <Typography
                    variant="small"
                    className="text-xs text-blue-gray-400"
                  >
                    {timestamp}
                  </Typography>
                </div>
              </div>
            ))}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Home;