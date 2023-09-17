import React from 'react'
import NaviBar from '../layouting/NaviBar';

type Props = {}

const HomeSkeleton = (props: Props) => {
    return (
        <div className='h-screen bg-white'>
            <NaviBar />
            <div className="flex items-center justify-start overflow-scroll md:w-[90%] mx-auto super-power">
                {
                    Array(30).fill(null).map(() => {
                        return <>
                            <div className="mx-5 cursor-pointer rounded-lg bg-gray-300">
                                <p className='px-10 py-3'></p>
                            </div>
                        </>
                    })
                }
            </div>
            <div className='flex items-center justify-center'>
                <div className='py-10 px-[100px] w-[300px] md:w-[450px] rounded-lg bg-gray-300 my-10'>

                </div>
            </div>
            <div className='flex items-center justify-center md:justify-between flex-wrap w-[90%] mx-auto'>
                {
                    Array(10).fill(null).map(() => {
                        return <>
                            <div className="mb-10">
                                <div className='w-[300px] h-[300px] bg-gray-300 rounded-xl'>

                                </div>
                                <div className="cursor-pointer rounded-sm w-fit bg-gray-300 mt-5">
                                    <p className='px-10 py-2 w-[300px]'></p>
                                </div>
                                <div className="cursor-pointer rounded-sm w-fit bg-gray-300 mt-5">
                                    <p className='px-10 py-2 w-[200px]'></p>
                                </div>
                                <div className="cursor-pointer rounded-sm w-fit bg-gray-300 mt-5">
                                    <p className='px-10 py-2 w-[100px]'></p>
                                </div>
                            </div>
                        </>
                    })
                }
            </div>

        </div>
    )
}

export default HomeSkeleton;