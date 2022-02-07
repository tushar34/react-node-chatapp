import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import "./Chatsection.css";

function Chatsection() {
  return (
    <div className="chat">
      {/* user section */}
      <div className="user-sec">
        {/* profile */}
        <div className="profile">
          <Stack direction="row" spacing={2}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Stack>
        </div>
        {/* name */}
        <div>
          <span>Kaushik</span>
        </div>
      </div>

      {/* chat section */}
      <div className="chat-section">
        <div className="user_mesaages">
          
          <div className="sender">
            <div className="send">
              <span className="text_msg">
                Surat is a city in the western Indian state of Gujarat. Located
                at the mouth of the Tapti River, it used to be a large seaport.
                It is now the commercial and economic center in South Gujarat,
                and one of the largest urban areas of western India. It has
                well-established diamond and textile industries, and is a
                shopping centre for apparels and accessories. About 90% of the
                world's diamonds supply are cut and polished in the
                city.[11][12][13] It is the second largest city in Gujarat after
                Ahmedabad and the eighth largest city by population and ninth
                largest urban agglomeration in India. It is the administrative
                capital of the Surat district. The city is located 284
                kilometres (176 mi) south of the state capital, Gandhinagar; 265
                kilometres (165 mi) south of Ahmedabad; and 289 kilometres (180
                mi) north of Mumbai. The city centre is located on the Tapti
                River, close to Arabian Sea.[14]
              </span>
            </div>
          </div>
          <div className="reciver">
              <div className="recive">
            <span className="text_msg">
              Surat will be the world's fastest growing city from 2019 to 2035,
              according to a study conducted by Economic Times.[15] The city
              registered an annualised GDP growth rate of 11.5% over the seven
              fiscal years between 2001 and 2008.[16] Surat was awarded "best
              city" by the Annual Survey of India's City-Systems (ASICS) in
              2013.[17] Surat is selected as the first smart IT city in India
              which is being constituted by the Microsoft CityNext Initiative
              tied up with IT services majors Tata Consultancy Services and
              Wipro.[18] The city has 2.97 million internet users, about 65% of
              total population.[19] Surat was selected in 2015 for an IBM
              Smarter Cities Challenge grant.[20][21] Surat has been selected as
              one of twenty Indian cities to be developed as a smart city under
              PM Narendra Modi's flagship Smart Cities Mission.[22]
            </span>
            </div>
          </div>


          <div className="sender">
            <div className="send">
              <span className="text_msg">
                Surat is a city in the western Indian state of Gujarat. Located
                at the mouth of the Tapti River, it used to be a large seaport.
                It is now the commercial and economic center in South Gujarat,
                and one of the largest urban areas of western India. It has
                well-established diamond and textile industries, and is a
                shopping centre for apparels and accessories. About 90% of the
                world's diamonds supply are cut and polished in the
                city.[11][12][13] It is the second largest city in Gujarat after
                Ahmedabad and the eighth largest city by population and ninth
                largest urban agglomeration in India. It is the administrative
                capital of the Surat district. The city is located 284
                kilometres (176 mi) south of the state capital, Gandhinagar; 265
                kilometres (165 mi) south of Ahmedabad; and 289 kilometres (180
                mi) north of Mumbai. The city centre is located on the Tapti
                River, close to Arabian Sea.[14]
              </span>
            </div>
          </div>
          <div className="reciver">
              <div className="recive">
            <span className="text_msg">
              Surat will be the world's fastest growing city from 2019 to 2035,
              according to a study conducted by Economic Times.[15] The city
              registered an annualised GDP growth rate of 11.5% over the seven
              fiscal years between 2001 and 2008.[16] Surat was awarded "best
              city" by the Annual Survey of India's City-Systems (ASICS) in
              2013.[17] Surat is selected as the first smart IT city in India
              which is being constituted by the Microsoft CityNext Initiative
              tied up with IT services majors Tata Consultancy Services and
              Wipro.[18] The city has 2.97 million internet users, about 65% of
              total population.[19] Surat was selected in 2015 for an IBM
              Smarter Cities Challenge grant.[20][21] Surat has been selected as
              one of twenty Indian cities to be developed as a smart city under
              PM Narendra Modi's flagship Smart Cities Mission.[22]
            </span>
            </div>
          </div>



        </div>
      </div>

      {/* typing message section */}
      <div className="text-area">
          <div>
              <input type="text" />
          </div>
      </div>
    </div>
  );
}

export default Chatsection;
