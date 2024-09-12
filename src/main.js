const banner = document.querySelector(".hero__block");
const item = document.querySelector(".item");
const list = document.querySelector(".list");
const listing = document.querySelector(".listing")


import {getbanner_hero } from "./data.js";
import { getnew_prod } from "./data.js";
import { getnovin_prod } from "./data.js";
import { getreccomendation_prod } from "./data.js";



const renderbanner = async () => {
    const data = await getbanner_hero()

    banner.innerHTML = data.map((item) =>`
        <img src="${item.img}" alt="">
    `)
}

renderbanner()


const rendernew_prod = async () => {
    const data = await getnew_prod()

    item.innerHTML = data.map((item) =>`
        <div class="w-[181px] shadow-[0_4px_40px_0_rgba(0,0,0,0.12)]  rounded-[4px] py-[11px] px-[11px]">
        <img src="${item.img}" alt="">
        <p class="font-medium text-[14px] text-[#ff4343] mt-[20px] mb-[5px]">${item.price}</p>
        <p class="text-[12px] font-light leading-[122%] text-[#000]">${item.des}</p>
        </div>

        <div class="w-[181px] shadow-[0_4px_40px_0_rgba(0,0,0,0.12)]  rounded-[4px] py-[11px] px-[11px]">
        <img src="${item.img}" alt="">
        <p class="font-medium text-[14px] text-[#ff4343] mt-[20px] mb-[5px]">${item.price}</p>
        <p class="text-[12px] font-light leading-[122%] text-[#000]">${item.des}</p>
        </div>


        <div class="w-[181px] shadow-[0_4px_40px_0_rgba(0,0,0,0.12)]  rounded-[4px] py-[11px] px-[11px]">
        <img src="${item.img}" alt="">
        <p class="font-medium text-[14px] text-[#ff4343] mt-[20px] mb-[5px]">${item.price}</p>
        <p class="text-[12px] font-light leading-[122%] text-[#000]">${item.des}</p>
        </div>


        <div class="w-[181px] shadow-[0_4px_40px_0_rgba(0,0,0,0.12)]  rounded-[4px] py-[11px] px-[11px]">
        <img src="${item.img}" alt="">
        <p class="font-medium text-[14px] text-[#ff4343] mt-[20px] mb-[5px]">${item.price}</p>
        <p class="text-[12px] font-light leading-[122%] text-[#000]">${item.des}</p>
        </div>



        <div class="w-[181px] shadow-[0_4px_40px_0_rgba(0,0,0,0.12)]  rounded-[4px] py-[11px] px-[11px]">
        <img src="${item.img}" alt="">
        <p class="font-medium text-[14px] text-[#ff4343] mt-[20px] mb-[5px]">${item.price}</p>
        <p class="text-[12px] font-light leading-[122%] text-[#000]">${item.des}</p>
        </div>


        <div class="w-[181px] shadow-[0_4px_40px_0_rgba(0,0,0,0.12)]  rounded-[4px] py-[11px] px-[11px]">
        <img src="${item.img}" alt="">
        <p class="font-medium text-[14px] text-[#ff4343] mt-[20px] mb-[5px]">${item.price}</p>
        <p class="text-[12px] font-light leading-[122%] text-[#000]">${item.des}</p>
        </div>


        <div class="w-[181px] shadow-[0_4px_40px_0_rgba(0,0,0,0.12)]  rounded-[4px] py-[11px] px-[11px]">
        <img src="${item.img}" alt="">
        <p class="font-medium text-[14px] text-[#ff4343] mt-[20px] mb-[5px]">${item.price}</p>
        <p class="text-[12px] font-light leading-[122%] text-[#000]">${item.des}</p>
        </div>


        <div class="w-[181px] shadow-[0_4px_40px_0_rgba(0,0,0,0.12)]  rounded-[4px] py-[11px] px-[11px]">
        <img src="${item.img}" alt="">
        <p class="font-medium text-[14px] text-[#ff4343] mt-[20px] mb-[5px]">${item.price}</p>
        <p class="text-[12px] font-light leading-[122%] text-[#000]">${item.des}</p>
        </div>


        <div class="w-[181px] shadow-[0_4px_40px_0_rgba(0,0,0,0.12)]  rounded-[4px] py-[11px] px-[11px]">
        <img src="${item.img}" alt="">
        <p class="font-medium text-[14px] text-[#ff4343] mt-[20px] mb-[5px]">${item.price}</p>
        <p class="text-[12px] font-light leading-[122%] text-[#000]">${item.des}</p>
        </div>



        <div class="w-[181px] shadow-[0_4px_40px_0_rgba(0,0,0,0.12)]  rounded-[4px] py-[11px] px-[11px]">
        <img src="${item.img}" alt="">
        <p class="font-medium text-[14px] text-[#ff4343] mt-[20px] mb-[5px]">${item.price}</p>
        <p class="text-[12px] font-light leading-[122%] text-[#000]">${item.des}</p>
        </div>


        <div class="w-[181px] shadow-[0_4px_40px_0_rgba(0,0,0,0.12)]  rounded-[4px] py-[11px] px-[11px]">
        <img src="${item.img}" alt="">
        <p class="font-medium text-[14px] text-[#ff4343] mt-[20px] mb-[5px]">${item.price}</p>
        <p class="text-[12px] font-light leading-[122%] text-[#000]">${item.des}</p>
        </div>


        <div class="w-[181px] shadow-[0_4px_40px_0_rgba(0,0,0,0.12)]  rounded-[4px] py-[11px] px-[11px]">
        <img src="${item.img}" alt="">
        <p class="font-medium text-[14px] text-[#ff4343] mt-[20px] mb-[5px]">${item.price}</p>
        <p class="text-[12px] font-light leading-[122%] text-[#000]">${item.des}</p>
        </div>
       
    `)
    
}

rendernew_prod()


const rendernovin_prod = async () => {
    const data = await getnovin_prod()

    list.innerHTML = data.map((item) =>`
        <li class="w-[180px] rounded-[4px] shadow-[0_4px_40px_0_rgba(0,0,0,0.12)] py-[11px] px-[11px]">
        <img src="${item.img}" alt="">
        <p class="text-[16px] font-medium text-[#000] mt-[20px] mb-[5px]">${item.price}</p>
        <p class="text-[12px] leading-[124%] font-light text-[#000]">${item.text}</p>
        </li>

        <li class="w-[180px] rounded-[4px] shadow-[0_4px_40px_0_rgba(0,0,0,0.12)] py-[11px] px-[11px]">
        <img src="${item.img}" alt="">
        <p class="text-[16px] font-medium text-[#000] mt-[20px] mb-[5px]">${item.price}</p>
        <p class="text-[12px] leading-[124%] font-light text-[#000]">${item.text}</p>
        </li>


        <li class="w-[180px] rounded-[4px] shadow-[0_4px_40px_0_rgba(0,0,0,0.12)] py-[11px] px-[11px]">
        <img src="${item.img}" alt="">
        <p class="text-[16px] font-medium text-[#000] mt-[20px] mb-[5px]">${item.price}</p>
        <p class="text-[12px] leading-[124%] font-light text-[#000]">${item.text}</p>
        </li>


        <li class="w-[180px] rounded-[4px] shadow-[0_4px_40px_0_rgba(0,0,0,0.12)] py-[11px] px-[11px]">
        <img src="${item.img}" alt="">
        <p class="text-[16px] font-medium text-[#000] mt-[20px] mb-[5px]">${item.price}</p>
        <p class="text-[12px] leading-[124%] font-light text-[#000]">${item.text}</p>
        </li>


        <li class="w-[180px] rounded-[4px] shadow-[0_4px_40px_0_rgba(0,0,0,0.12)] py-[11px] px-[11px]">
        <img src="${item.img}" alt="">
        <p class="text-[16px] font-medium text-[#000] mt-[20px] mb-[5px]">${item.price}</p>
        <p class="text-[12px] leading-[124%] font-light text-[#000]">${item.text}</p>
        </li>


        <li class="w-[180px] rounded-[4px] shadow-[0_4px_40px_0_rgba(0,0,0,0.12)] py-[11px] px-[11px]">
        <img src="${item.img}" alt="">
        <p class="text-[16px] font-medium text-[#000] mt-[20px] mb-[5px]">${item.price}</p>
        <p class="text-[12px] leading-[124%] font-light text-[#000]">${item.text}</p>
        </li>


        <li class="w-[180px] rounded-[4px] shadow-[0_4px_40px_0_rgba(0,0,0,0.12)] py-[11px] px-[11px]">
        <img src="${item.img}" alt="">
        <p class="text-[16px] font-medium text-[#000] mt-[20px] mb-[5px]">${item.price}</p>
        <p class="text-[12px] leading-[124%] font-light text-[#000]">${item.text}</p>
        </li>



        <li class="w-[180px] rounded-[4px] shadow-[0_4px_40px_0_rgba(0,0,0,0.12)] py-[11px] px-[11px]">
        <img src="${item.img}" alt="">
        <p class="text-[16px] font-medium text-[#000] mt-[20px] mb-[5px]">${item.price}</p>
        <p class="text-[12px] leading-[124%] font-light text-[#000]">${item.text}</p>
        </li>


        <li class="w-[180px] rounded-[4px] shadow-[0_4px_40px_0_rgba(0,0,0,0.12)] py-[11px] px-[11px]">
        <img src="${item.img}" alt="">
        <p class="text-[16px] font-medium text-[#000] mt-[20px] mb-[5px]">${item.price}</p>
        <p class="text-[12px] leading-[124%] font-light text-[#000]">${item.text}</p>
        </li>



        <li class="w-[180px] rounded-[4px] shadow-[0_4px_40px_0_rgba(0,0,0,0.12)] py-[11px] px-[11px]">
        <img src="${item.img}" alt="">
        <p class="text-[16px] font-medium text-[#000] mt-[20px] mb-[5px]">${item.price}</p>
        <p class="text-[12px] leading-[124%] font-light text-[#000]">${item.text}</p>
        </li>


        <li class="w-[180px] rounded-[4px] shadow-[0_4px_40px_0_rgba(0,0,0,0.12)] py-[11px] px-[11px]">
        <img src="${item.img}" alt="">
        <p class="text-[16px] font-medium text-[#000] mt-[20px] mb-[5px]">${item.price}</p>
        <p class="text-[12px] leading-[124%] font-light text-[#000]">${item.text}</p>
        </li>


        <li class="w-[180px] rounded-[4px] shadow-[0_4px_40px_0_rgba(0,0,0,0.12)] py-[11px] px-[11px]">
        <img src="${item.img}" alt="">
        <p class="text-[16px] font-medium text-[#000] mt-[20px] mb-[5px]">${item.price}</p>
        <p class="text-[12px] leading-[124%] font-light text-[#000]">${item.text}</p>
        </li>


        


        
    `)
}

rendernovin_prod()

const renderreccomendation_prod = async () => {
    const data = await getreccomendation_prod()

    listing.innerHTML = data.map((item) =>`
        <li class="w-[181px] rounded-[4px] shadow-[0_4px_40px_0_rgba(0,0,0,0.12)] py-[11px] px-[11px]">
        <img src="${item.img}" alt="">
        <p class="text-[#ff4343] text-[14px] font-medium mt-[20px] mb-[7px]">${item.price}</p>
        <p class="text-[12px] leading-[124%] font-light text-[#000]">${item.desc}</p>
        </li>


        <li class="w-[181px] rounded-[4px] shadow-[0_4px_40px_0_rgba(0,0,0,0.12)] py-[11px] px-[11px]">
        <img src="${item.img}" alt="">
        <p class="text-[#ff4343] text-[14px] font-medium mt-[20px] mb-[7px]">${item.price}</p>
        <p class="text-[12px] leading-[124%] font-light text-[#000]">${item.desc}</p>
        </li>


        <li class="w-[181px] rounded-[4px] shadow-[0_4px_40px_0_rgba(0,0,0,0.12)] py-[11px] px-[11px]">
        <img src="${item.img}" alt="">
        <p class="text-[#ff4343] text-[14px] font-medium mt-[20px] mb-[7px]">${item.price}</p>
        <p class="text-[12px] leading-[124%] font-light text-[#000]">${item.desc}</p>
        </li>


        <li class="w-[181px] rounded-[4px] shadow-[0_4px_40px_0_rgba(0,0,0,0.12)] py-[11px] px-[11px]">
        <img src="${item.img}" alt="">
        <p class="text-[#ff4343] text-[14px] font-medium mt-[20px] mb-[7px]">${item.price}</p>
        <p class="text-[12px] leading-[124%] font-light text-[#000]">${item.desc}</p>
        </li>


        <li class="w-[181px] rounded-[4px] shadow-[0_4px_40px_0_rgba(0,0,0,0.12)] py-[11px] px-[11px]">
        <img src="${item.img}" alt="">
        <p class="text-[#ff4343] text-[14px] font-medium mt-[20px] mb-[7px]">${item.price}</p>
        <p class="text-[12px] leading-[124%] font-light text-[#000]">${item.desc}</p>
        </li>


        <li class="w-[181px] rounded-[4px] shadow-[0_4px_40px_0_rgba(0,0,0,0.12)] py-[11px] px-[11px]">
        <img src="${item.img}" alt="">
        <p class="text-[#ff4343] text-[14px] font-medium mt-[20px] mb-[7px]">${item.price}</p>
        <p class="text-[12px] leading-[124%] font-light text-[#000]">${item.desc}</p>
        </li>


        <li class="w-[181px] rounded-[4px] shadow-[0_4px_40px_0_rgba(0,0,0,0.12)] py-[11px] px-[11px]">
        <img src="${item.img}" alt="">
        <p class="text-[#ff4343] text-[14px] font-medium mt-[20px] mb-[7px]">${item.price}</p>
        <p class="text-[12px] leading-[124%] font-light text-[#000]">${item.desc}</p>
        </li>


        <li class="w-[181px] rounded-[4px] shadow-[0_4px_40px_0_rgba(0,0,0,0.12)] py-[11px] px-[11px]">
        <img src="${item.img}" alt="">
        <p class="text-[#ff4343] text-[14px] font-medium mt-[20px] mb-[7px]">${item.price}</p>
        <p class="text-[12px] leading-[124%] font-light text-[#000]">${item.desc}</p>
        </li>


        <li class="w-[181px] rounded-[4px] shadow-[0_4px_40px_0_rgba(0,0,0,0.12)] py-[11px] px-[11px]">
        <img src="${item.img}" alt="">
        <p class="text-[#ff4343] text-[14px] font-medium mt-[20px] mb-[7px]">${item.price}</p>
        <p class="text-[12px] leading-[124%] font-light text-[#000]">${item.desc}</p>
        </li>


        <li class="w-[181px] rounded-[4px] shadow-[0_4px_40px_0_rgba(0,0,0,0.12)] py-[11px] px-[11px]">
        <img src="${item.img}" alt="">
        <p class="text-[#ff4343] text-[14px] font-medium mt-[20px] mb-[7px]">${item.price}</p>
        <p class="text-[12px] leading-[124%] font-light text-[#000]">${item.desc}</p>
        </li>


        <li class="w-[181px] rounded-[4px] shadow-[0_4px_40px_0_rgba(0,0,0,0.12)] py-[11px] px-[11px]">
        <img src="${item.img}" alt="">
        <p class="text-[#ff4343] text-[14px] font-medium mt-[20px] mb-[7px]">${item.price}</p>
        <p class="text-[12px] leading-[124%] font-light text-[#000]">${item.desc}</p>
        </li>


        <li class="w-[181px] rounded-[4px] shadow-[0_4px_40px_0_rgba(0,0,0,0.12)] py-[11px] px-[11px]">
        <img src="${item.img}" alt="">
        <p class="text-[#ff4343] text-[14px] font-medium mt-[20px] mb-[7px]">${item.price}</p>
        <p class="text-[12px] leading-[124%] font-light text-[#000]">${item.desc}</p>
        </li>


        <li class="w-[181px] rounded-[4px] shadow-[0_4px_40px_0_rgba(0,0,0,0.12)] py-[11px] px-[11px]">
        <img src="${item.img}" alt="">
        <p class="text-[#ff4343] text-[14px] font-medium mt-[20px] mb-[7px]">${item.price}</p>
        <p class="text-[12px] leading-[124%] font-light text-[#000]">${item.desc}</p>
        </li>


        <li class="w-[181px] rounded-[4px] shadow-[0_4px_40px_0_rgba(0,0,0,0.12)] py-[11px] px-[11px]">
        <img src="${item.img}" alt="">
        <p class="text-[#ff4343] text-[14px] font-medium mt-[20px] mb-[7px]">${item.price}</p>
        <p class="text-[12px] leading-[124%] font-light text-[#000]">${item.desc}</p>
        </li>


        <li class="w-[181px] rounded-[4px] shadow-[0_4px_40px_0_rgba(0,0,0,0.12)] py-[11px] px-[11px]">
        <img src="${item.img}" alt="">
        <p class="text-[#ff4343] text-[14px] font-medium mt-[20px] mb-[7px]">${item.price}</p>
        <p class="text-[12px] leading-[124%] font-light text-[#000]">${item.desc}</p>
        </li>

        <li class="w-[181px] rounded-[4px] shadow-[0_4px_40px_0_rgba(0,0,0,0.12)] py-[11px] px-[11px]">
        <img src="${item.img}" alt="">
        <p class="text-[#ff4343] text-[14px] font-medium mt-[20px] mb-[7px]">${item.price}</p>
        <p class="text-[12px] leading-[124%] font-light text-[#000]">${item.desc}</p>
        </li>
        
    `)
}


renderreccomendation_prod()