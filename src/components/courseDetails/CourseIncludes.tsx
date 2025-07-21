import { MdOutlineOndemandVideo } from "react-icons/md";
import { MdOutlineArticle } from "react-icons/md";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { PiDeviceMobile } from "react-icons/pi";
import { IoIosInfinite } from "react-icons/io";
import { MdOutlineClosedCaption } from "react-icons/md";
import { FaAudioDescription } from "react-icons/fa6";
import { PiCertificateLight } from "react-icons/pi";

function CourseIncludes() {
  return (
    <div>
      <p className="text-xl font-semibold py-4 font-playfair">This course includes:</p>
      <div className="space-y-3 md:grid md:grid-cols-2">
        <div className="flex items-center space-x-2 text-sm text-gray-800">
          <MdOutlineOndemandVideo className="text-lg text-gray-600" />
          <span>36.5 hours on-demand video</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-800">
          <MdOutlineArticle className="text-lg text-gray-600" />
          <span>22 articles</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-800">
          <AiOutlineCloudDownload className="text-lg text-gray-600" />
          <span>130 downloadable resources</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-800">
          <PiDeviceMobile className="text-lg text-gray-600" />
          <span>Access on mobile and TV</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-800">
          <IoIosInfinite className="text-lg text-gray-600" />
          <span>Full lifetime access</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-800">
          <MdOutlineClosedCaption className="text-lg text-gray-600" />
          <span>Closed captions</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-800">
          <FaAudioDescription className="text-lg text-gray-600" />
          <span>Audio description in existing audio</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-800">
          <PiCertificateLight className="text-lg text-gray-600" />
          <span>Certificate of completion</span>
        </div>
      </div>
    </div>
  );
}

export default CourseIncludes;
