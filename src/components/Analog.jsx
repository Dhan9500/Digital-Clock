/* eslint-disable no-unused-vars */
import { UseContextData } from "../context/Context";
import "./analog.css";
const Analog = () => {
	const { hrs, min, sec, day, toggle, amPm } = UseContextData();
	return (
		<div className="analog-clock relative w-48 h-48 flex justify-center items-center bg-gray-700 rounded-full ">
			<div className="hour-containers w-48">
				<ul className="hour-numbers flex justify-center items-center">
					<li className="absolute h-[100%] top-0 [&:nth-child(1)]:rotate-90">
						<div className="num mt-0 font-normal text-xl -rotate-90">
							{toggle && amPm === "PM" ? "15" : "3"}
						</div>
					</li>
					<li className="absolute h-[100%] top-0 [&:nth-child(2)]:-rotate-180">
						<div className="num mt-0 font-normal text-xl -rotate-180">
							{toggle && amPm === "PM" ? "18" : "6"}
						</div>
					</li>
					<li className="absolute h-[100%] top-0 [&:nth-child(3)]:rotate-[270deg]">
						<div className="num mt-0 font-normal text-xl -rotate-[270deg]">
							{toggle && amPm === "PM" ? "21" : "9"}
						</div>
					</li>
					<li className="absolute h-[100%] top-0 [&:nth-child(4)]:rotate-[360deg]">
						<div className="num mt-0 font-normal text-xl">12</div>
					</li>
				</ul>
				<ul className="hour-marks flex justify-center items-center">
					<li className="absolute h-[100%] top-0 [&:nth-child(1)]:rotate-[30deg]">
						<div className="mark w-[1px] bg-slate-400 h-3 mt-2 ml-[1px]"></div>
					</li>
					<li className="absolute h-[100%] top-0 [&:nth-child(2)]:rotate-[60deg]">
						<div className="mark w-[1px] bg-slate-400 h-3 mt-2 ml-[1px]"></div>
					</li>
					<li className="absolute h-[100%] top-0 [&:nth-child(3)]:rotate-[120deg]">
						<div className="mark w-[1px] bg-slate-400 h-3 mt-2 ml-[1px]"></div>
					</li>
					<li className="absolute h-[100%] top-0 [&:nth-child(4)]:rotate-[150deg]">
						<div className="mark w-[1px] bg-slate-400 h-3 mt-2 ml-[1px]"></div>
					</li>
					<li className="absolute h-[100%] top-0 [&:nth-child(5)]:rotate-[210deg]">
						<div className="mark w-[1px] bg-slate-400 h-3 mt-2 ml-[1px]"></div>
					</li>
					<li className="absolute h-[100%] top-0 [&:nth-child(6)]:rotate-[240deg]">
						<div className="mark w-[1px] bg-slate-400 h-3 mt-2 ml-[1px]"></div>
					</li>
					<li className="absolute h-[100%] top-0 [&:nth-child(7)]:rotate-[300deg]">
						<div className="mark w-[1px] bg-slate-400 h-3 mt-2 ml-[1px]"></div>
					</li>
					<li className="absolute h-[100%] top-0 [&:nth-child(8)]:rotate-[330deg]">
						<div className="mark w-[1px] bg-slate-400 h-3 mt-2 ml-[1px]"></div>
					</li>
				</ul>
				<ul className="middle-lines flex justify-center items-center">
					<li className="absolute h-[100%] top-0 [&:nth-child(1)]:rotate-[90deg]">
						<div className="line mt-[108px] bg-slate-400 h-14 w-[1px] opacity-[0.2]"></div>
					</li>
					<li className="absolute h-[100%] top-0 [&:nth-child(2)]:rotate-[180deg]">
						<div className="line mt-[108px] bg-slate-400 h-14 w-[1px] opacity-[0.2]"></div>
					</li>
					<li className="absolute h-[100%] top-0 [&:nth-child(3)]:rotate-[270deg]">
						<div className="line mt-[108px] bg-slate-400 h-14 w-[1px] opacity-[0.2]"></div>
					</li>
					<li className="absolute h-[100%] top-0 [&:nth-child(4)]:rotate-[360deg]">
						<div className="line mt-[108px] bg-slate-400 h-14 w-[1px] opacity-[0.2]"></div>
					</li>
				</ul>
				<ul className="hands flex justify-center items-center">
					<li
						className="hour-hand"
						style={{
							height: "100%",
							position: "absolute",
							top: "0",
							transform: `rotate(${30 * hrs + min / 2}deg)`,
						}}
					>
						<div className=" bg-gradient-to-t from-green-400 to-sky-500 h-[76px] mt-[35px] w-[4px] rounded-lg shadow-sm shadow-fuchsia-700"></div>
					</li>
					<li
						className="min-hand"
						style={{
							height: "100%",
							position: "absolute",
							top: "0",
							transform: `rotate(${min * 6}deg)`,
						}}
					>
						<div className=" bg-gradient-to-t from-orange-400 to-pink-500 h-[87px] mt-[25px] w-[4px] rounded-lg"></div>
					</li>
					<li
						className="sec-hand"
						style={{
							height: "100%",
							position: "absolute",
							top: "0",
							transform: `rotate(${sec * 6}deg)`,
						}}
					>
						<div className=" bg-gradient-to-t from-yellow-300 to-rose-500 h-24 mt-[17px] w-[2px] rounded-lg"></div>
					</li>
				</ul>
			</div>
			<div className="circle-dot absolute flex justify-center items-center">
				<div className="dot h-3 w-3 bg-blue-700 rounded-full"></div>
			</div>
			<div className="chrono absolute flex justify-center items-center right-7 rotate-90">
				<div className="chrono h-[21px] w-3 bg-gray-300 bg-green-500 shadow shadow-red-500 ml-[0.7px]">
					<div className="-rotate-90 text-[0.5rem] font-bold text-yellow-200 mt-[6px]">
						{day.slice(0, 3)}
					</div>
				</div>
			</div>
		</div>
	);
};
export default Analog;
