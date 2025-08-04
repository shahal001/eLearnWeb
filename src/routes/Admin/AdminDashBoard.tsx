import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { FaBook, FaUserGraduate, FaUserCheck, FaPlus, FaBroadcastTower } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const data = [
  { name: "Jan", value: 580 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 200 },
  { name: "Apr", value: 278 },
  { name: "May", value: 189 },
];

const Admin = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow h-screen p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-8">🎓 Admin Panel</h2>
        <nav className="space-y-4 text-gray-700 font-medium">
          {["Dashboard", "Courses", "Users", "Analytics", "Settings"].map(
            (item, i) => (
              <a
                key={i}
                href="#"
                className="block hover:text-blue-600 transition-colors"
              >
                {item}
              </a>
            )
          )}
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold">Dashboard</h1>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {[
            {
              title: "Total Courses",
              value: 128,
              icon: <FaBook className="text-blue-500 text-xl" />,
              color: "text-blue-600",
            },
            {
              title: "Active Users",
              value: 520,
              icon: <FaUserGraduate className="text-green-500 text-xl" />,
              color: "text-green-600",
            },
            {
              title: "Revenue",
              value: 5120,
              icon: <FaUserGraduate className="text-yellow-500 text-xl" />,
              color: "text-yellow-600",
            },
            {
              title: "Enrollments",
              value: 8450,
              icon: <FaUserCheck className="text-purple-500 text-xl" />,
              color: "text-purple-600",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="flex items-center space-x-3 mb-2">
                {stat.icon}
                <h3 className="text-lg font-semibold text-gray-700">
                  {stat.title}
                </h3>
              </div>
              <p className={`text-3xl font-bold ${stat.color}`}>
                {stat.value.toLocaleString()}
              </p>
            </div>
          ))}
        </div>

        {/* Graph + Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[60%_40%] gap-6">
          {/* Chart Section */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Enrollment Trends
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={data}>
                <defs>
                  <linearGradient id="colorLine" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22c55e" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#22c55e" stopOpacity={0.2} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="name"
                  stroke="#4b5563"
                  tick={{ fontSize: 12 }}
                />
                <YAxis stroke="#4b5563" tick={{ fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    borderRadius: "0.5rem",
                    border: "1px solid #e5e7eb",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="url(#colorLine)"
                  strokeWidth={3}
                  dot={{ stroke: "#22c55e", strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  title: "Add Course",
                  icon: <FaPlus className="text-blue-500" />,
                  value: "Add a new course to your catalog",
                  route: "/admin/addNewCourse",
                },
                {
                  title: "Go Live",
                  icon: <FaBroadcastTower className="text-green-500" />,
                  value: "Launch live webinar or session",
                  route: "/",
                },
                {
                  title: "All Courses",
                  icon: <FaBroadcastTower className="text-red-500" />,
                  value: "Launch live webinar or session",
                  route: "/",
                },
              ].map((action, i) => (
                <div
                  key={i}
                  className="flex items-start space-x-4 p-4 rounded-lg border hover:shadow transition"
                  onClick={() => navigate(action.route)}
                >
                  <div className="text-2xl">{action.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {action.title}
                    </h4>
                    <p className="text-sm text-gray-600">{action.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
