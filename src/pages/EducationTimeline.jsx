import React from 'react';

const EducationTimeline = () => {
  const educationData = [
    {
      title: "10th Standard",
      percentage: "75.6%",
      year: "2019",
      institute: "Government Higher Secondary School",
      location: "Pannankulam , Srivilliputhur , Tamil Nadu",
    },
    {
      title: "11th Standard",
      percentage: "55.33%",
      year: "2020",
      institute: "Government Higher Secondary School",
      location: "Krishnan Kovil , Srivilliputhur , Tamil Nadu",
    },
    {
      title: "12th Standard",
      percentage: "80.92%",
      year: "2021",
      institute: "Government Higher Secondary School",
      location: "Krishnan Kovil , Srivilliputhur , Tamil Nadu",
    },
    {
      title: "UG - B.Tech IT",
      percentage: "75%",
      year: "2021 - 2025",
      institute: "Sengunthar College of Engineering",
      location: "Tiruchengode , Namakkal , Tamil Nadu",
    },
  ];

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 px-6 py-16 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-indigo-700 dark:text-indigo-400 mb-12">Education Timeline</h2>

        <div className="relative border-l-4 border-indigo-600 dark:border-indigo-400 pl-6">
          {educationData.map((item, index) => (
            <div key={index} className="mb-12 relative">
              {/* Timeline Dot */}
              <div className="absolute -left-3 top-1 w-6 h-6 bg-indigo-600 dark:bg-indigo-400 rounded-full border-4 border-white dark:border-gray-900"></div>

              {/* Card */}
              <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-300">{item.title}</h3>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  <strong>Percentage:</strong> {item.percentage}
                </p>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  <strong>Completed Year:</strong> {item.year}
                </p>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  <strong>Institute:</strong> {item.institute}
                </p>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  <strong>Location:</strong> {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;
