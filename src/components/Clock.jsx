import { UseContextData } from '../context/Context';
import Day from './Day';
import Time from './Time';
const Clock = () => {
	const { clickToggle, toggle, loading } = UseContextData();
	return (
		<div className='h-[50%] w-[90%] bg-gray-700 flex relative justify-center items-center rounded-md shadow-2xl shadow-black'>
			<div className='shadow-2xl shadow-indigo-500 rounded-md'>
				{loading ? (
					<span className='loading loading-spinner text-secondary' />
				) : (
					<>
						<Time />
						<Day />
					</>
				)}
			</div>
			<span className={`label-text text-xs absolute left-56 bottom-72 mb-1 text-red-600`}>
				{toggle ? '24H' : '12H'}
			</span>
			<input
				onChange={() => {
					clickToggle();
				}}
				type='checkbox'
				className='toggle toggle-primary absolute left-64 bottom-72'
				checked={toggle}
			/>
		</div>
	);
};

export default Clock;
