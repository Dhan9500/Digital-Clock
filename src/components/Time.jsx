import { UseContextData } from '../context/Context';
import '../App.css';
const Time = () => {
	const { hrs, min, sec, amPm, blink } = UseContextData();
	return (
		<div className='flex items-center gap-5'>
			<div className='roboto-slab-time text-6xl text-white gap-3 font- flex'>
				<span className=' text-transparent bg-clip-text bg-gradient-to-t from-purple-400 to-sky-500 pl-5'>
					{hrs}
				</span>
				<div className='container mx-auto  flex items-center justify-center'>
					<div className='flex flex-col gap-3 mt-2'>
						<div className={`h-3 w-3 rounded-full ${blink ? 'bg-white' : 'bg-gray-700'}`}></div>
						<div className={`h-3 w-3 rounded-full ${blink ? 'bg-white' : 'bg-gray-700'}`}></div>
					</div>
				</div>
				<span className='text-transparent bg-clip-text bg-gradient-to-t from-red-300 to-orange-500'>{min}</span>
			</div>
			<div className='font-bold text-sm pr-2 pt-2'>
				<div className='pb-8 text-orange-400'>{amPm}</div>
				<div className='mt-3 text-sm text-[#00FF00]'>{sec}</div>
			</div>
		</div>
	);
};

export default Time;
