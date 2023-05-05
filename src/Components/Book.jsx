import React, { useEffect, useState } from "react";


export default function Book() {

    return (
        <div className="w-full overflow-hidden">
            <p className=" text-slate-950 font-extrabold text-7xl p-16">BOOK TICKET </p>
            <p className=" text-black font-medium p-16">*please fill the required form:</p>
            <div className="flex flex-col bg-[#efefef]  ">
                <div className="flex justify-between bg-white px-[54px] flex-wrap">
                    <div className="flex flex-wrap">



                        <div>
                            <form

                            >
                                <div className="md:flex  gap-3 ">
                                    <div className="flex-col gap-2 ">
                                        <label className="text-[#232360] font-sans font-semibold ">
                                            First name
                                        </label>
                                        <input
                                            type="text"
                                            className="bg-transparent font-sans pl-[5px] text-[#768396] border-2  border-slate-300  rounded-md  md:w-96 flex resize-none h-12  focus:outline-0  "

                                            required

                                        />
                                    </div>
                                    <div className="flex-col md:ml-[30px]">
                                        <label className="text-[#232360] font-sans font-semibold  ">
                                            Last name
                                        </label>
                                        <input
                                            type="text"
                                            className="bg-transparent pl-[5px] font-sans text-[#768396] border-2  border-slate-300  rounded-md   flex resize-none h-12 focus:outline-0 md:w-96"

                                            required

                                        />
                                    </div>
                                </div>
                                <div className="flex-col pt-[50px] ">
                                    <label className="text-[#232360] font-sans font-semibold">
                                        Email
                                    </label>
                                    <input
                                        type="email"

                                        className="bg-transparent font-sans  text-[#768396] border-2  border-slate-300   rounded-md p-2  flex resize-none h-12 focus:outline-0 md:w-96"
                                        required

                                    />
                                </div>
                                <br />

                                <input
                                    className="absolute right-20 top-[144px] bg-transparent hover:bg-[#b24bf3]  font-sans font-semibold hover:text-white border-slate-300 border hover:border-transparent  rounded-md p-2 ml-2 sm:right-20 max-[320px]:top-[208px] md:top-[30px] "
                                    type="submit"
                                    value="Submit"
                                />
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
