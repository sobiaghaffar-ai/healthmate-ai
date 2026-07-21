"use client";

export default function HealthReport({ report }: any) {
  if (!report) return null;

  const copyReport = () => {
    navigator.clipboard.writeText(report);
    alert("Report copied!");
  };

  return (
    <div className="mt-6 bg-blue-50 p-5 rounded-xl">
      <h2 className="text-2xl font-bold text-blue-700 mb-3">
        🩺 AI Wellness Report
      </h2>

      <p className="text-gray-700 whitespace-pre-line">
        {report}
      </p>

      <button
        onClick={copyReport}
        className="mt-4 w-full bg-green-600 text-white py-3 rounded-lg font-semibold"
      >
        📋 Copy Report
      </button>
    </div>
  );
}