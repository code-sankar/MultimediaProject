import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-xs md:text-sm lg:text-base">
              © {new Date().getFullYear()} This site is created by sankar.
            </p>
          </div>

          <ul className="flex flex-col md:flex-row justify-center md:space-x-8 text-xs md:text-sm lg:text-base mb-4 md:mb-0">
            <li className="mb-2 md:mb-0">
              <a
                href="/privacy"
                className="hover:text-gray-400 transition-colors duration-200"
              >
                Privacy Policy
              </a>
            </li>
            <li className="mb-2 md:mb-0">
              <a
                href="/terms"
                className="hover:text-gray-400 transition-colors duration-200"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-gray-400 transition-colors duration-200"
              >
                Contact Us
              </a>
            </li>
          </ul>

          <div className="flex justify-center md:justify-end space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35c-.733 0-1.325.593-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.299h-3.125v-3.622h3.125v-2.671c0-3.1 1.893-4.788 4.66-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.918c-1.504 0-1.794.715-1.794 1.762v2.315h3.587l-.467 3.622h-3.12v9.299h6.114c.733 0 1.325-.593 1.325-1.326v-21.348c0-.733-.592-1.326-1.325-1.326z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.83.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.719 0-4.924 2.205-4.924 4.924 0 .386.044.762.128 1.124-4.09 -.205-7.719-2.165-10.148-5.144-.423.725-.666 1.562-.666 2.457 0 1.694.863 3.188 2.175 4.065-.802-.026-1.555-.246-2.214-.614v.062c0 2.366 1.684 4.342 3.918 4.788-.411.111-.845.171-1.293.171-.316 0-.623-.03-.923-.086.623 1.945 2.433 3.36 4.576 3.398-1.677 1.314-3.791 2.096-6.09 2.096-.395 0-.785-.023-1.17-.069 2.172 1.392 4.748 2.205 7.523 2.205 9.025 0 13.964-7.478 13.964-13.964 0-.213-.005-.426-.014-.637.961-.694 1.796-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.31 3.608 1.285.975.975 1.223 2.242 1.285 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.31 2.633-1.285 3.608-.975.975-2.242 1.223-3.608 1.285-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.31-3.608-1.285-.975-.975-1.223-2.242-1.285-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.31-2.633 1.285-3.608.975-.975 2.242-1.223 3.608-1.285 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.257 0-3.667.014-4.947.072-1.429.065-2.805.372-3.873 1.441-1.068 1.068-1.375 2.444-1.441 3.873-.058 1.28-.072 1.69-.072 4.947s.014 3.667.072 4.947c.065 1.429.372 2.805 1.441 3.873 1.068 1.068 2.444 1.375 3.873 1.441 1.28.058 1.69.072 4.947.072s3.667-.014 4.947-.072c1.429-.065 2.805-.372 3.873-1.441 1.068-1.068 1.375-2.444 1.441-3.873.058-1.28.072-1.69.072-4.947s-.014-3.667-.072-4.947c-.065-1.429-.372-2.805-1.441-3.873-1.068-1.068-2.444-1.375-3.873-1.441-1.28-.058-1.69-.072-4.947-.072z" />
                <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6. 162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.208 0-4-1.792-4-4s1.792-4 4-4 4 1.792 4 4-1.792 4-4 4zm6.406-11.845c-.796 0-1.442.646-1.442 1.442s.646 1.442 1.442 1.442 1.442-.646 1.442-1.442-.646-1.442-1.442-1.442z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;