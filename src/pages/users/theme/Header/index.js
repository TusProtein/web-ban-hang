import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineTwitter,
  AiOutlineUser,
} from "react-icons/ai";
import { Link } from "react-router-dom";

import formatter from "utils/formatter";

function Header() {
  return (
    <>
      <div className="bg-[#f5f5f5]">
        <div
          style={{
            padding: "10px 0 13px",
          }}
          className="w-full flex m-auto max-w-[1170px]"
        >
          <div className="flex justify-start w-[50%] items-center">
            <div className="flex items-center gap-x-1">
              <i>
                <AiOutlineMail />
              </i>
              <p>maianhtu1111@gmail.com</p>
              <div className="mx-2 bg-[#ccc] w-[0.5px] h-6"></div>
              <p>Miễn phí ship đơn từ {formatter(200000)}</p>
            </div>
          </div>
          <div className="flex justify-end w-[50%]">
            <div>
              <ul className="list-none flex gap-x-1">
                <Link to={""}>
                  <li>
                    <AiOutlineFacebook />
                  </li>
                </Link>
                <Link to={""}>
                  <li>
                    <AiOutlineInstagram />
                  </li>
                </Link>
                <Link to={""}>
                  <li>
                    <AiOutlineLinkedin />
                  </li>
                </Link>
                <Link to={""}>
                  <li>
                    <AiOutlineTwitter />
                  </li>
                </Link>
              </ul>
            </div>
            <div className="flex gap-x-1 cursor-pointer">
              <i>
                <AiOutlineUser />
              </i>
              <div className="font-medium">Đăng nhập</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
