import { useState } from "react";
import AiCourseLandingPageBasic from "./AiCourseLandingPageBasic";
import AiCourseLandingPage from "./AiCourseLandingPage";

function Ai() {
    const [selected, setSelected] = useState('basic');
    return (
        <div>
            {selected === "basic" ? <AiCourseLandingPageBasic /> : <AiCourseLandingPage />}
            <div className="centered-div">
                <div className="relative h-14 w-80 rounded-full bg-orange-400 shadow-lg">
                    <div
                        className={`absolute top-0 left-0 h-14 w-40 rounded-full bg-white transition-transform duration-300 ease-in-out shadow-md ${selected === 'intermediate' ? 'translate-x-40' : ''
                            }`}
                    />

                    <div className="absolute top-0 left-0 flex h-14 w-80">
                        <button
                            onClick={() => setSelected('basic')}
                            className={`flex-1 rounded-full font-bold text-xl focus:outline-none z-10 ${selected === 'basic' ? 'text-orange-500' : 'text-white'
                                }`}
                        >
                            Basic
                        </button>
                        <button
                            onClick={() => setSelected('intermediate')}
                            className={`flex-1 rounded-full font-bold text-xl focus:outline-none z-10 ${selected === 'intermediate' ? 'text-orange-500' : 'text-white'
                                }`}
                        >
                            Intermediate
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ai