<<<<<<< HEAD
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
=======
import React from "react";
import { Todos } from "./Atoms/store/todos";

import { Connection_atoms, element, fetched_data, linkedin_atoms, Message_atoms, Notification_atoms, sum_of_three } from "./Atoms/store/atoms";
import { RecoilRoot, useRecoilStateLoadable, useRecoilTransactionObserver_UNSTABLE, useRecoilValue } from "recoil";

const APP = ()=>
{
    return (
        <div>
            <RecoilRoot>
                <Buttons/>
                <TodosItem id = {1}/>
                <TodosItem id ={1}/>
                <TodosItem id = {2}/>
                <TodosItem id ={2}/>
                </RecoilRoot>
         
        </div>
    )
}
export default APP;

const Buttons = ()=>
{
    const Home = useRecoilValue(linkedin_atoms)
    const Connection = useRecoilValue(Connection_atoms)
    const Notify = useRecoilValue(Notification_atoms)
    const Message = useRecoilValue(Message_atoms);
    const sum = useRecoilValue(sum_of_three);
    const data_fetched = useRecoilStateLoadable(fetched_data)
    
   


    // const num =  useMemo(()=>{
    //   const hello = Home + Connection +Notify + Message;
    //   {console.log('hello from useMemo')}
    //   return hello;
    // },[Home , Connection ,Notify, Message]) 

    return (
        <>
        <div className="flex items-center justify-center p-5">
          <button className="text-center p-5 bg-red-500 rounded-full text-2xl ml-5">Home{(Home>2 ? '10+' : '')}</button>
          <button className="text-center p-5 bg-red-500 rounded-full text-2xl ml-5">Connection{(Connection > 100 ? "102+" : '')} </button>
          <button className="text-center p-5 bg-red-500 rounded-full text-2xl ml-5">Notification {(Notify>5 ? "10+" : " ")}</button>
          <button className="text-center p-5 bg-red-500 rounded-full text-2xl ml-5">Message {Message}</button>
          <button className="text-center p-5 bg-red-500 rounded-full text-2xl ml-5">Me {sum}</button>
        </div>
        <div>
            {data_fetched && data_fetched.length > 0 ? (
                <h1 className="text-3xl font-semibold text-center"> title: {data_fetched[0].title}</h1>
            ):(
                <h1>something is loading....</h1>
            )}
        </div>
        </>
      
    )
}


const TodosItem = ({id})=>
{
    const current_todos = useRecoilValue(element(id));

    return (
      <div>
        <h1 className="text-2xl text-center font-semibold mt-10"> Title:{current_todos.title}</h1>
        <h1 className="text-2xl text-center font-semibold mt-10"> Description:{current_todos.description}</h1>

      </div>
    )
}
>>>>>>> master
