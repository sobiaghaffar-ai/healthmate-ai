"use client";

import { useState } from "react";
import HealthForm from "./components/HealthForm";
import HealthReport from "./components/HealthReport";
import {
  FaHeartbeat,
  FaAppleAlt,
  FaTint,
  FaLeaf,
  FaRunning,
  FaStethoscope,
} from "react-icons/fa";
export default function Home() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [water, setWater] = useState("");
  const [sleep, setSleep] = useState("");
  const [exercise, setExercise] = useState("");
  const [diet, setDiet] = useState("");
  const [mood, setMood] = useState("");
  const [report, setReport] = useState("");
  const [loading, setLoading] = useState(false);

const handleGenerate = async () => {
  if (
    !name ||
    !age ||
    !gender ||
    !water ||
    !sleep ||
    !exercise ||
    !diet ||
    !mood
  ) {
    alert("Please fill all fields.");
    return;
  }

  setLoading(true);

  try {
    const response = await fetch("/api/health", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        age,
        gender,
        water,
        sleep,
        exercise,
        diet,
        mood,
      }),
    });

    const data = await response.json();

    setReport(data.report);
  } catch (error) {
    alert("Something went wrong.");
    console.error(error);
  }

  setLoading(false);
};
const handleReset = () => {
  setName("");
  setAge("");
  setGender("");
  setWater("");
  setSleep("");
  setExercise("");
  setDiet("");
  setMood("");
  setReport("");
};

  return (
  <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sky-100 via-blue-50 to-cyan-100 flex items-center justify-center p-6">
    <div className="absolute left-10 top-24 text-blue-300 text-5xl animate-bounce">
  <FaTint />
</div>

<div className="absolute right-10 top-28 text-red-300 text-5xl animate-bounce">
  <FaHeartbeat />
</div>

<div className="absolute left-14 bottom-28 text-green-400 text-5xl animate-bounce">
  <FaLeaf />
</div>

<div className="absolute right-14 bottom-28 text-orange-400 text-5xl animate-bounce">
  <FaAppleAlt />
</div>

<div className="absolute right-24 top-1/2 text-cyan-400 text-5xl animate-bounce">
  <FaRunning />
</div>
    <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-8 w-full max-w-2xl border border-white">
      
      <h1 className="text-4xl font-bold text-center text-blue-700">
        💙 HealthMate AI
      </h1>

      <p className="text-center text-gray-600 mt-3 mb-8">
        Your Personal Daily Wellness Assistant
      </p>

      <HealthForm
        formData={{
          name,
          age,
          gender,
          water,
          sleep,
          exercise,
          diet,
          mood,
        }}
        setFormData={(value: any) => {
          const data =
            typeof value === "function"
              ? value({
                  name,
                  age,
                  gender,
                  water,
                  sleep,
                  exercise,
                  diet,
                  mood,
                })
              : value;

          setName(data.name);
          setAge(data.age);
          setGender(data.gender);
          setWater(data.water);
          setSleep(data.sleep);
          setExercise(data.exercise);
          setDiet(data.diet);
          setMood(data.mood);
        }}
        onGenerate={handleGenerate}
      />

      {loading && (
        <p className="text-center mt-5 text-blue-600">
          🤖 AI is creating your health report...
        </p>
      )}

      <HealthReport report={report} />
      {report && (
  <button
    onClick={handleReset}
    className="mt-4 w-full bg-gray-600 text-white py-3 rounded-lg font-semibold"
  >
    🔄 Reset Form
  </button>
)}

    </div>
  </main>
);
}