import React from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { AiOutlineSearch } from "react-icons/ai";
import {FaGasPump, FaStar} from 'react-icons/fa'
import { MdSettingsSuggest } from "react-icons/md";

const Listing = () => {

  
  return (
    <div>
      <nav className="py-2 pl-5 bg-[#142028] items-center flex">
        <a href="https://www.google.com/search?q=dextools.io&oq=dext&gs_lcrp=EgZjaHJvbWUqDggBEEUYJxg7GIAEGIoFMgYIABBFGDwyDggBEEUYJxg7GIAEGIoFMgYIAhBFGDkyDQgDEAAYgwEYsQMYgAQyBggEEEUYPDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDYzMDVqMGo5qAIAsAIA&sourceid=chrome&ie=UTF-8">
          <img
            src="https://seeklogo.com/images/D/dextools-logo-4EDDD2DF98-seeklogo.com.png"
            alt=""
            className="w-7 h-7 mt-3"
          />
        </a>

        <div className="bg-[#23323c] ml-7 items-center flex rounded-full py-1 px-1 mt-3 w-[10%] h-8">
          <img
            src="https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/ZJZZK5B2ZNF25LYQHMUTBTOMLU.png"
            alt=""
            className="w-6 h-[95%] mr-2"
          />
          <p className="text-sm">ETHERUEM</p>
          <BiChevronDown className="w-5 h-5" />
        </div>

        <div className="mt-3 flex items-center text-xs ml-2 text-[#cacedb]">
          <p>ETH: $1,220.90</p>
          <FaGasPump className="ml-3 mr-1" />
          <p>14</p>
        </div>

        <div className="bg-[#3a4956] rounded-xl w-[40%] h-9 pr-[1px] py-[1px] flex gap-2 items-center mt-2 ml-[7%]">
          <AiOutlineSearch className="m-1 ml-3 w-5 text-[#cacedb] h-5" />
          <input
            type="text"
            placeholder="Search pair by symbol, name, contract or token"
            className=" rounded-r-xl text-sm pl-3 rounded-br-xl outline-none bg-[#142028] h-full w-full"
          />
        </div>

        <div className="flex gap-3 items-center ml-[15%]">
          <MdSettingsSuggest className="w-6 text-[#cacedb] h-6" />
          <FaStar className="w-5 text-[#cacedb] h-5" />
          <button className="bg-[#00a2bf] px-4 py-[5.5%] text-sm rounded-full text-center">
            Connect
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Listing