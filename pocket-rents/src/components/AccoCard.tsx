import { useNavigate } from "react-router-dom";
import {AiFillStar} from 'react-icons/ai'

type Props = {

}

export const AccoCard = ({acco,total}:any) => {
  const navigate = useNavigate();

  return (
    <div className='w-[300px] mb-5'>
        <img src={acco.img} className='rounded-xl w-full hover:opacity-30 transition duration-500 ease-in-out h-[280px] object-cover mb-3 cursor-pointer' alt="" onClick={() => navigate(`/accomodations/${acco.id}`)} />
        <div className='flex items-center justify-between'>
        <p className='font-bold'>{acco.location}</p>
        <div className='flex items-center justify-center'>
        <AiFillStar className="text-md" /> <p>{acco.rating}</p>

        </div>
        </div>
        <p className='font-light text-gray-500'>{acco.distant}</p>
        <p className='font-light text-gray-500'>{acco.duration}</p>
        <p className='mt-3 text-sm underline transition ease-in-out duration-500'><b>${total ? acco.price * acco.days : acco.price}</b> total before taxes</p>
    </div>
  )
}