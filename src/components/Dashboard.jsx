import React from "react";
import Counter from "./Counter";
import UserForm from "./UserForm";
import RichTextEditor from "./RichTextEditor";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const data = [
    { name: "Jan", users: 10 },
    { name: "Feb", users: 20 },
    { name: "Mar", users: 30 },
  ];

  return (
    <div>
      <div className="d-flex justify-content-center mt-4 mb-5">
      <div style={{ width: "60%" }}>
        <h3 className="text-center mb-4">User Growth</h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#ccc" />
            <Line type="monotone" dataKey="users" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
    <Counter />
    <UserForm />
    <RichTextEditor />
    </div>
  );
};

export default Dashboard;
