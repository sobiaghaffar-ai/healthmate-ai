"use client";

export default function HealthForm({
  formData,
  setFormData,
  onGenerate,
}: any) {
  return (
    <div className="space-y-5">

      <input
        type="text"
        placeholder="Enter Your Name"
        value={formData.name}
        onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
        }
        className="w-full border rounded-lg p-3"
      />

      <input
        type="number"
        placeholder="Age"
        value={formData.age}
        onChange={(e) =>
          setFormData({ ...formData, age: e.target.value })
        }
        className="w-full border rounded-lg p-3"
      />

      <select
        value={formData.gender}
        onChange={(e) =>
          setFormData({ ...formData, gender: e.target.value })
        }
        className="w-full border rounded-lg p-3"
      >
        <option value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>

      <input
        type="number"
        placeholder="Water Intake (Glasses)"
        value={formData.water}
        onChange={(e) =>
          setFormData({ ...formData, water: e.target.value })
        }
        className="w-full border rounded-lg p-3"
      />

      <input
        type="number"
        placeholder="Sleep Hours"
        value={formData.sleep}
        onChange={(e) =>
          setFormData({ ...formData, sleep: e.target.value })
        }
        className="w-full border rounded-lg p-3"
      />

      <input
        type="number"
        placeholder="Exercise Minutes"
        value={formData.exercise}
        onChange={(e) =>
          setFormData({ ...formData, exercise: e.target.value })
        }
        className="w-full border rounded-lg p-3"
      />

      <select
        value={formData.diet}
        onChange={(e) =>
          setFormData({ ...formData, diet: e.target.value })
        }
        className="w-full border rounded-lg p-3"
      >
        <option value="">Diet Quality</option>
        <option>Healthy</option>
        <option>Average</option>
        <option>Unhealthy</option>
      </select>

      <select
        value={formData.mood}
        onChange={(e) =>
          setFormData({ ...formData, mood: e.target.value })
        }
        className="w-full border rounded-lg p-3"
      >
        <option value="">Mood</option>
        <option>😊 Happy</option>
        <option>😐 Neutral</option>
        <option>😴 Tired</option>
        <option>😟 Stressed</option>
      </select>

      <button
        onClick={onGenerate}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
      >
        Generate AI Report
      </button>

    </div>
  );
}