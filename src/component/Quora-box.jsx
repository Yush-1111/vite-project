import React from "react";
import { RxAvatar } from "react-icons/rx";
function Quorabox() {
  return (
    <div className="quorabox flex flex-col p-3  border-[0.6px]  border-black border-solid w-80 mx-auto ">
      <div className="quorabox_info flex gap-2 items-center">
        <RxAvatar className="text-[2rem] text-[#585858]" />
        <h5 className="text-[#585858] text-sm">usernqme</h5>
      </div>
      <div className="quorabox_quora ">
        <p> what is your qustion or link</p>
      </div>
    </div>
  );
}

export default Quorabox;
