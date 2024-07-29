/* eslint-disable no-unused-vars */
import { UseContextData } from "../context/Context";
import Analog from "./Analog";
import Day from "./Day";
import Time from "./Time";
const Clock = () => {
	const { clickToggle, toggle, loading, changeClock, clock } = UseContextData();
	return (
		<div className="h-[350px] w-[300px]  bg-gray-700 flex flex-col gap-5 justify-center items-center rounded-md shadow-md shadow-black">
			<div
				className={` w-[245px] h-[40px]  ${clock ? "mb-14" : "mt-4"} flex justify-between items-center gap-2 overflow-hidden `}
			>
				<input
					onChange={() => {
						changeClock();
					}}
					type="checkbox"
					className="toggle toggle-primary right-64 bottom-72"
					checked={clock}
				/>
				<span
					className={`label-text  absolute font-semibold  text-red-600 ${clock ? "text-[0.5rem] ml-1" : "text-[0.5rem] ml-5"}`}
				>
					{clock ? "Digital" : "Analog"}
				</span>

				<input
					onChange={() => {
						clickToggle();
					}}
					type="checkbox"
					className={`toggle toggle-primary left-64 bottom-72 `}
					checked={toggle}
				/>
				<span
					className={`label-text absolute text-[0.54rem] font-semibold ${toggle ? "ml-[12.7rem]" : "ml-[13.8rem]"} text-red-600`}
				>
					{toggle ? "24H" : "12H"}
				</span>
			</div>
			<div className=" shadow-lg shadow-indigo-500 rounded-md ">
				{loading ? <></> : <></>}
				{clock ? (
					<>
						<Time />
						<Day />
					</>
				) : (
					<Analog />
				)}
			</div>
		</div>
	);
};

export default Clock;
