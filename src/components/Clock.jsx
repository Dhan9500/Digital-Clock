/* eslint-disable no-unused-vars */
import { UseContextData } from '../context/Context';
import Analog from './Analog';
import Day from './Day';
import Time from './Time';
const Clock = () => {
	const { clickToggle, toggle, loading, changeClock, clock } = UseContextData();
	return (
		<div className='h-[50%] w-[90%] bg-gray-700 flex relative justify-center items-center rounded-md shadow-2xl shadow-black'>
			<div className=' shadow-2xl shadow-indigo-500 rounded-md '>
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
			<span
				className={`label-text text-xs font-semibold absolute left-56 bottom-72 mb-1 text-red-600 ${
					clock ? 'visible' : 'invisible'
				}`}
			>
				{toggle ? '24H' : '12H'}
			</span>
			<input
				onChange={() => {
					clickToggle();
				}}
				type='checkbox'
				className={`toggle toggle-primary absolute left-64 bottom-72 ${clock ? 'visible' : 'invisible'}`}
				checked={toggle}
			/>

			<input
				onChange={() => {
					changeClock();
				}}
				type='checkbox'
				className='toggle toggle-primary absolute right-64 bottom-72'
				checked={clock}
			/>
			<span className={`label-text text-xs font-semibold absolute left-[75px] bottom-72 mb-1 text-red-600`}>
				{clock ? 'Digital' : 'Analog'}
			</span>
		</div>
	);
};

export default Clock;
