import React from "react";
// import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  //   const navigate = useNavigate();
  //   const location = useLocation();

  // Fungsi untuk menangani navigasi
  //   const handleNavigation = (target) => {
  //     if (location.pathname !== "/") {
  //       // Pindah ke halaman utama, lalu scroll
  //       navigate("/");
  //       setTimeout(() => {
  //         document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
  //       }, 100); // Delay agar navigasi selesai terlebih dahulu
  //     } else {
  //       // Jika sudah di halaman utama, langsung scroll
  //       document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
  //     }
  //   };

  return (
    <footer className="mt-auto">
      <div className="bottom-0 left-0 w-full bg-dark">
        <div className="py-10">
          <div className="flex justify-center text-center mb-3">
            <ul className="flex flex-row gap-6 text-3xl">
              <li className="text-white">
                <FontAwesomeIcon icon={faLinkedin} />
              </li>
              <li className="text-white">
                <FontAwesomeIcon icon={faGithub} />
              </li>
              <li className="text-white">
                <FontAwesomeIcon icon={faInstagram} />
              </li>
            </ul>
          </div>

          <div className="text-center text-xs">
            <p className="text-white">&copy; 2024 Dionisius Nusaca R.N</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
