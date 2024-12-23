import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="bg-dark py-5 text-white">
        <div className="flex flex-col items-center gap-4">
          {/* Social Media Icons */}
          <ul className="flex gap-6 text-3xl">
            <li>
              <FontAwesomeIcon icon={faInstagram} />
            </li>
            <li>
              <FontAwesomeIcon icon={faYoutube} />
            </li>
          </ul>

          {/* Footer Text */}
          <p className="text-xs text-center">&copy; 2024 Dionisius Nureno</p>
        </div>
      </div>
    </footer>
  );
}
