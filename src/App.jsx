import {  RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { todos_list_item } from "./Store/Atoms/Atoms";

const App = () => {
    {console.log('hello Mukund')}
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Counter />
        </div>
    )};      
    


export default App;

const Counter = () => {
    return (
        <RecoilRoot>
            <div className="flex flex-col items-center justify-center">
                <Button />
                <Counter_value />
            </div>
        </RecoilRoot>
    );
};

const Button = () => {
    {console.log('rendered!')}
    const count = useRecoilValue(todos_list_item);
    return (
        <div className="text-center mt-5">
            <p className="text-4xl text-emerald-900">Count: {count}</p>
        </div>
    );
};

const Counter_value = () => {
    const [,setCount] = useRecoilState(todos_list_item);
    return (
        <div className="text-center mt-10">
            <button
                className="text-3xl p-5 bg-slate-600 text-white rounded-2xl hover:bg-slate-700"
                onClick={() =>setCount((prevCount)=>prevCount+1) }
            >
                Increment Count
            </button>
           <button className="text-3xl p-5 bg-slate-600 text-white rounded-2xl hover:bg-slate-700 ml-5" onClick={()=>
            {
                  setCount((prevCount)=>prevCount-1)
            }
           }>Decrement_count</button>
        </div>
    );
};
