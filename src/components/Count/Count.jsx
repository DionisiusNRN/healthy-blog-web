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
    <>
      {/* mx-3 max-w-md sm:mx-auto */}
      {/* Bagian A */}
      <div className="flex flex-col mx-3 xl:flex-row">
        <div className="mt-20 p-4 border rounded-lg shadow-lg max-w-md mx-auto h-full">
          <h2 className="text-xl font-semibold mb-4">Count Your Needs</h2>

          {/* Form Count */}
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
        </div>

        {/* Hasil perhitungan */}
        {/* Bagian B */}
        {bmr && (
          <div className="mt-10 mb-10 xl:mt-20 p-5 border rounded-lg shadow-lg sm:max-w-screen-sm xl:max-w-screen-md sm:mx-auto">
            <div className="mt-1">
              <h2 className="text-5xl font-bold mb-2">Results</h2>
              <>
                <div className="mb-5">
                  <h3 className="text-lg font-semibold">BMR: {bmr} kcal/day</h3>
                  <div className="text-justify text-sm">
                    <p>
                      BMR itu kayak jumlah "bensin" (kalori) MINIMUM yang tubuh
                      lo butuhin buat tetep hidup, meskipun lo cuma rebahan
                      sepanjang hari tanpa ngapa-ngapain. Jadi, ini energi dasar
                      buat jantung lo tetep berdetak, paru-paru lo ngambil
                      napas, dan organ-organ lo kerja normal.
                    </p>
                    <p>
                      Note: Jadi kalo ada influencer atau siapapun nyaranin lo
                      untuk "diet" tapi makanannya di BMR atau di bawah BMR,
                      maybe you can call them <i>si goubloug sia anying</i>.
                      body goals kagak, dijemput maut iye😒
                    </p>
                  </div>
                </div>

                <div className="mb-5">
                  <h3 className="text-lg font-semibold">
                    TDEE: {tdee} kcal/day
                  </h3>
                  <div className="text-justify text-sm">
                    <p>
                      TDEE itu singkatnya jumlah total energi (kalori) yang
                      dibakar tubuh lo dalam sehari, termasuk buat hal-hal dasar
                      kayak bernapas, mikir, sama gerak-gerak (kayak jalan,
                      olahraga, atau sekadar angkat galon). Jadi, TDEE =
                      kebutuhan kalori tubuh lo buat survive + kalori yang
                      dibakar dari aktivitas harian
                    </p>
                    <p>
                      Note: Ya istilah gampangnya kalo lo pernah dengan istilah{" "}
                      <i>Kalori Maintenance</i>, nah ya inilah kalori
                      maintenance elo. Jadi kalo nanti harus surplus berarti lo
                      tambahin 300-500 kalori dari TDEE ini, kalo defisit ya
                      tinggal dikurangi 200-300 kalori dari TDEE
                    </p>
                  </div>
                </div>

                <div className="mb-5">
                  <h3 className="text-lg font-semibold">
                    Kebutuhan Protein: {protein} grams
                  </h3>
                  <div className="text-justify text-sm">
                    <p>
                      Kalo elo olahraga sebetulnya sangat disarankan penuhi 2
                      kali berat badan karena aslinya kalo elo nggak olahraga
                      itu paling cuma butuh sekitar 1 kali berat badan, nah
                      selebihnya itu dipake buat otot yang habis lu pake buat
                      olahraga supaya dia bisa recovery
                    </p>
                    <p>
                      Note: Jadi gini, kalo kita olahraga atau terkhususnya
                      latihan beban (hypertrophy) itu akan bikin kerusakan atau
                      robekan tipis di otot, atau istilahnya <i>microtears</i>,
                      nah fungsi si protein ini nanti untuk memperbaiki si otot
                      yang rusak tadi. Kenapa harus dirusak? ya karena gaada
                      cara lain otot lu berkembang kalo nggak di rusak terus
                      ditambal
                    </p>
                  </div>
                </div>

                <div className="mb-5">
                  <h3 className="text-lg font-semibold">
                    Berat Badan Patokan: {idealWeight} kg
                  </h3>
                  <div className="text-justify text-sm">
                    <h3>TOLONG PERHATIKAN INI!</h3>
                    <p>NGGAK ADA YANG NAMANYA BERAT IDEAL.</p>
                    <p>
                      yang aku kasih ini adalah{" "}
                      <i>
                        Berat Badan <b>Patokan</b>
                      </i>
                      . Berat badan ini memang akan ngebuat kamu kelihatan
                      gendut, kalau komposisi tubuhmu jelek atau nggak FIT.
                    </p>
                    <p>
                      <i>
                        "Kenapa nggak beratnya diturunin aja? kan nanti jadi
                        nggak keliatan gendut."
                      </i>
                    </p>
                    <p>
                      Ngerti istilah <i>cungkring</i> atau <i>SkinnyFat</i>{" "}
                      nggak? kalau belum tau nanti dipelajari di bagian
                      edication ya...
                    </p>
                    <p>
                      tapi singkatnya begini, Mau berat badanmu serendah apapun
                      itu akan tetap nggak sehat karena komposisi yang dominan
                      di tubuhmu itu masih massa lemak jadi kamu masih obesitas.
                    </p>
                    <p>
                      <i>
                        "Kenapa nggak beratnya diturunin terus aku latihan
                        beban? aku tetep bisa mencapai berat yang aku mau tapi
                        komposisi tubuhku tetep dominan massa otot, jadinya
                        nggak obesitas deh."
                      </i>
                    </p>
                    <p>
                      berat badan yang terlalu rendah itu tetep ada risikonya,
                      meski badan kamu isinya otot. Tubuhmu bakal kayak mesin
                      yang kekurangan bahan bakar. Sistem imun bisa turun,
                      hormon berantakan, dan tenaga bakal gampang habis. Berotot
                      atau kelihatan dominan massa otot sih, tapi badan lemah.
                      ya nggak balance, kan? Jadi itulah kenapa aku bikin berat
                      badan patokan ini, supaya kamu bisa sesuaikan di berat
                      badan tersebut kamu perbaiki komposisi tubuhmu dan bukan
                      malah nurun-nurunin berat badanmu
                    </p>
                  </div>
                </div>
              </>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Count;
