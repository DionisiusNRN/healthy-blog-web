import React, { useState } from "react";

const Count = () => {
  // State untuk menyimpan nilai form
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activity, setActivity] = useState("sedentary");
  const [bodyFat, setBodyFat] = useState("");
  const [bmr, setBmr] = useState(null);
  const [tdee, setTdee] = useState(null);
  const [protein, setProtein] = useState(null);
  const [idealWeight, setIdealWeight] = useState(null);

  // Fungsi untuk menghitung BMR, TDEE, Protein, dan Ideal Weight
  const handleCount = () => {
    let calculatedBmr;

    // Hitung BMR berdasarkan gender
    if (gender === "male") {
      calculatedBmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      calculatedBmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // Hitung TDEE berdasarkan aktivitas
    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      veryActive: 1.725,
      extraActive: 1.9,
    };

    const calculatedTdee = calculatedBmr * activityMultipliers[activity];

    // Hitung kebutuhan protein (rentang)
    const minProtein = weight * 1;
    const maxProtein = weight * 2;

    // Hitung berat badan patokan
    const calculatedIdealWeight =
      gender === "male" ? height - 100 : height - 90;

    // Update state dengan hasil perhitungan
    setBmr(calculatedBmr);
    setTdee(calculatedTdee);
    setProtein(`${minProtein} - ${maxProtein}`);
    setIdealWeight(
      `${calculatedIdealWeight - 5} - ${calculatedIdealWeight + 5}`
    );
  };

  // Validasi apakah form lengkap
  const isFormValid = age && weight && height && activity;

  return (
    <div className="mt-20 max-w-md mx-auto p-4 border rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Count Your Needs</h2>
      <form>
        <div className="mb-4">
          <label className="block">Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
            placeholder="Enter your age"
          />
        </div>

        <div className="mb-4">
          <label className="block">Gender:</label>
          <div className="flex items-center">
            <label className="mr-4">
              <input
                type="radio"
                value="male"
                checked={gender === "male"}
                onChange={() => setGender("male")}
                className="mr-2"
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                value="female"
                checked={gender === "female"}
                onChange={() => setGender("female")}
                className="mr-2"
              />
              Female
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block">Weight (kg):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
            placeholder="Enter your weight"
          />
        </div>

        <div className="mb-4">
          <label className="block">Height (cm):</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
            placeholder="Enter your height"
          />
        </div>

        <div className="mb-4">
          <label className="block">Activity Level:</label>
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
          >
            <option value="sedentary">Sedentary</option>
            <option value="light">Light (1-3 times/week)</option>
            <option value="moderate">Moderate (4-5 times/week)</option>
            <option value="veryActive">Very Active (6-7 times/week)</option>
            <option value="extraActive">
              Extra Active (daily or physical job)
            </option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block">Body Fat (%) (Optional):</label>
          <input
            type="number"
            value={bodyFat}
            onChange={(e) => setBodyFat(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
            placeholder="Enter body fat percentage (optional)"
          />
        </div>

        <button
          type="button"
          onClick={handleCount}
          disabled={!isFormValid}
          className={`mt-4 p-2 w-full ${
            !isFormValid ? "bg-gray-400" : "bg-blue-500"
          } text-white font-semibold rounded`}
        >
          Count
        </button>
      </form>

      {/* Hasil perhitungan */}
      {bmr && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Results</h3>
          <p>BMR: {bmr} kcal/day</p>
          <p>TDEE: {tdee} kcal/day</p>
          <p>Protein Range: {protein} grams</p>
          <p>Ideal Weight Range: {idealWeight} kg</p>
        </div>
      )}
    </div>
  );
};

export default Count;
