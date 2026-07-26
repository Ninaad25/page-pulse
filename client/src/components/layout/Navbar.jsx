import { FaChartLine } from "react-icons/fa";
import ThemeSelector from "../ui/ThemeSelector";

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-xl rounded-2xl px-6">
      <div className="flex-1">
        <div className="flex items-center gap-3">
          <div className="avatar placeholder">
            <div className="bg-primary text-primary-content rounded-full w-12">
              <FaChartLine size={22} />
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold">Page Pulse</h1>

            <p className="text-sm opacity-70">Website Performance Auditor</p>
          </div>
        </div>
      </div>

      <ThemeSelector />
    </div>
  );
}

export default Navbar;
